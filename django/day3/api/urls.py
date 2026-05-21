from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework.authtoken.views import obtain_auth_token
from . import views

# The router builds all CRUD routes for each viewset automatically:
#   /students/        GET (list), POST (create)
#   /students/<id>/   GET, PUT, PATCH, DELETE
router = DefaultRouter()
router.register('students', views.StudentViewSet)
router.register('teachers', views.TeacherViewSet)
router.register('courses', views.CourseViewSet)
router.register('enrollments', views.EnrollmentViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('signup/', views.SignupView.as_view(), name='signup'),
    path('login/', obtain_auth_token, name='login'),   # POST username+password -> token
]
