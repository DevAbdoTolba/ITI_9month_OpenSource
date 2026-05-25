from odoo import models, fields

class HmsDoctor(models.Model):
    _name = 'hms.doctor'
    _description = 'Doctor Record'

    first_name = fields.Char(string='First Name', required=True)
    last_name = fields.Char(string='Last Name', required=True)
    image = fields.Image(string='Image')