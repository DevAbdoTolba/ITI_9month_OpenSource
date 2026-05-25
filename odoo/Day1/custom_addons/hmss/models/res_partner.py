from odoo import models, fields, api
from odoo.exceptions import ValidationError, UserError

class ResPartner(models.Model):
    _inherit = 'res.partner'

    related_patient_id = fields.Many2one('hms.patient', string='Related Patient')

    @api.constrains('email')
    def _check_customer_email_not_in_patient(self):
        for record in self:
            if record.customer_rank > 0 and record.email:
                patient = self.env['hms.patient'].search([('email', '=', record.email)], limit=1)
                if patient:
                    raise ValidationError(
                        f"Customer email {record.email} already exists in Patient model!"
                    )

    @api.constrains('vat')
    def _check_vat_mandatory(self):
        for record in self:
            if record.customer_rank > 0 and not record.vat:
                raise ValidationError('Tax ID (VAT) is mandatory for customers.')

    def unlink(self):
        for record in self:
            if record.related_patient_id:
                raise UserError(
                    f"Cannot delete customer {record.name} because it is linked to a patient."
                )
        return super().unlink()
