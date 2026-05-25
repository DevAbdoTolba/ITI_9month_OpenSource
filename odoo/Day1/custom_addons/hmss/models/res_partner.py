from odoo import models, fields, api
from odoo.exceptions import ValidationError, UserError

class ResPartner(models.Model):
    _inherit = 'res.partner'

    related_patient_id = fields.Many2one('hms.patient', string='Related Patient')
    
    @api.constrains('email')
    def _check_email_not_in_patient(self):
        for record in self:
            if record.email and record.is_company == False:
                patient = self.env['hms.patient'].search([('email', '=', record.email)])
                if patient:
                    raise ValidationError(f"Email {record.email} already exists in Patient model!")
    
    @api.constrains('vat')
    def _check_vat_mandatory(self):
        for record in self:
            if not record.vat and record.is_company == False:
                raise ValidationError("Tax ID (VAT) is mandatory for customers!")
    
    def unlink(self):
        for record in self:
            if record.related_patient_id:
                raise UserError(f"Cannot delete customer {record.name} because it's linked to a patient!")
        return super().unlink()
