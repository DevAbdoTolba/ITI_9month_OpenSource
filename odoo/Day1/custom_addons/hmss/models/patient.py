from odoo import models, fields, api
from odoo.exceptions import ValidationError
from odoo.tools import email_re
from datetime import date

class HmsPatient(models.Model):
    _name = 'hms.patient'
    _description = 'Patient Record'

    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    email = fields.Char(string='Email', required=True)
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
    age = fields.Integer(string='Age', compute='_compute_age', store=True)
    
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

    _sql_constraints = [
        ('email_unique', 'unique(email)', 'Patient email must be unique.')
    ]

    @api.depends('birth_date')
    def _compute_age(self):
        for record in self:
            if record.birth_date:
                today = date.today()
                record.age = (today - record.birth_date).days // 365
            else:
                record.age = 0

    @api.onchange('birth_date')
    def _onchange_birth_date(self):
        if self.birth_date:
            today = date.today()
            age = (today - self.birth_date).days // 365
            if age < 30:
                self.pcr = True
                return {
                    'warning': {
                        'title': 'PCR Auto-Checked',
                        'message': 'Patient younger than 30 automatically has PCR checked.'
                    }
                }

    @api.onchange('pcr')
    def _onchange_pcr(self):
        if self.pcr and not self.cr_ratio:
            return {'warning': {'title': 'PCR Selected', 'message': 'Please fill CR Ratio'}}

    @api.constrains('email')
    def _check_email(self):
        for record in self:
            if record.email and not email_re.match(record.email):
                raise ValidationError('Please enter a valid email address.')

    @api.constrains('pcr', 'cr_ratio')
    def _check_cr_when_pcr(self):
        for record in self:
            if record.pcr and not record.cr_ratio:
                raise ValidationError('CR Ratio is required when PCR is checked.')

    def write(self, vals):
        old_states = {record.id: record.state for record in self}
        res = super().write(vals)
        if 'state' in vals:
            for record in self:
                old_state = old_states.get(record.id)
                if old_state and old_state != record.state:
                    self.env['hms.patient.log'].create({
                        'patient_id': record.id,
                        'old_state': old_state,
                        'new_state': record.state,
                        'description': f'State changed to {record.state}'
                    })
        return res

    @api.onchange('department_id')
    def _onchange_department(self):
        if self.department_id:
            self.doctor_ids = False
            self.doctor_ids = [(6, 0, [])]