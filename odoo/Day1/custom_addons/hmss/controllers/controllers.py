# from odoo import http


# class Hmss(http.Controller):
#     @http.route('/hmss/hmss', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/hmss/hmss/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('hmss.listing', {
#             'root': '/hmss/hmss',
#             'objects': http.request.env['hmss.hmss'].search([]),
#         })

#     @http.route('/hmss/hmss/objects/<model("hmss.hmss"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('hmss.object', {
#             'object': obj
#         })

