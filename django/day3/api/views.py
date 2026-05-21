from rest_framework import viewsets, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token

from .models import Student, Teacher, Course, Enrollment
from .serializers import (
    StudentSerializer, TeacherSerializer, CourseSerializer,
    EnrollmentSerializer, SignupSerializer,
)


# A ModelViewSet gives list/retrieve/create/update/destroy in ONE class.
# SearchFilter handles the "filter by any field" requirement via ?search=...
class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'phone', 'gender', 'address', 'level']


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'age', 'salary']


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'hours', 'level']


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['grade', 'student__name', 'course__name']


# --- Auth ---
class SignupView(APIView):
    permission_classes = [AllowAny]   # open: you don't need a token to register

    def post(self, request):
        serializer = SignupSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'username': user.username}, status=201)
