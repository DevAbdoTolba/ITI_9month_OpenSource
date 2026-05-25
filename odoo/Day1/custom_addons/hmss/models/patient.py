from odoo import models, fields, api
from datetime import datetime

class HmsPatient(models.Model):
    _name = 'hms.patient'
    _description = 'Patient Record'

    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    email = fields.Char(string='Email', required=True, unique=True)
    birth_date = fields.Date(string='Birth Date')
    history = fields.Html(string='History')
    cr_ratio = fields.Float(string='CR Ratio')
    
    blood_type = fields.Selection([
        ('a', 'A'),
        ('b', 'B'),
        ('ab', 'AB'),
        ('o', 'O')
    ], string='Blood Type')
    
    pcr = fields.Boolean(string='PCR')
    image = fields.Image(string='Image')
    address = fields.Text(string='Address')
    age = fields.Integer(string='Age', compute='_compute_age')
    
    state = fields.Selection([
        ('undetermined', 'Undetermined'),
        ('good', 'Good'),
        ('fair', 'Fair'),
        ('serious', 'Serious')
    ], string='State', default='undetermined')
    
    department_id = fields.Many2one(
        'hms.department', 
        string='Department',
        domain=[('is_opened', '=', True)]
    )
    doctor_ids = fields.Many2many(
        'hms.doctor', 
        string='Doctors'
    )

    department_capacity = fields.Integer(
        related='department_id.capacity', 
        string='Department Capacity'
    )
    
    log_ids = fields.One2many('hms.patient.log', 'patient_id', string='History Log')
    
    @api.depends('birth_date')
    def _compute_age(self):
        for record in self:
            if record.birth_date:
                today = datetime.today().date()
                record.age = (today - record.birth_date).days // 365
            else:
                record.age = 0
    
    @api.onchange('age')
    def _onchange_age(self):
        if self.age and self.age < 30:
            self.pcr = True
        if self.age and self.age < 30:
            self.pcr = True
    
    @api.onchange('pcr')
    def _onchange_pcr(self):
        if self.pcr and not self.cr_ratio:
            return {'warning': {'title': 'PCR Selected', 'message': 'Please fill CR Ratio'}}
    
    @api.onchange('birth_date')
    def _onchange_birth_date(self):
        if self.birth_date:
            today = datetime.today().date()
            age = (today - self.birth_date).days // 365
            if age < 30:
                self.pcr = True
    
    @api.constrains('email')
    def _check_email_unique(self):
        for record in self:
            existing = self.search([('email', '=', record.email), ('id', '!=', record.id)])
            if existing:
                raise ValueError(f"Email {record.email} already exists!")
    
    @api.onchange('state')
    def _onchange_state(self):
        if self.id:  # Only for existing records
            old_state = self.env['hms.patient'].browse(self.id).state
            if old_state != self.state:
                self.env['hms.patient.log'].create({
                    'patient_id': self.id,
                    'old_state': old_state,
                    'new_state': self.state,
                    'description': f'State changed to {self.state}'
                })
    
    @api.onchange('department_id')
    def _onchange_department(self):
        if self.department_id:
            self.doctor_ids = False
            self.doctor_ids = [(6, 0, [])]