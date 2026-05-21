from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Student, Teacher, Course, Enrollment


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

    # DRF doesn't call the model's clean() automatically, so we enforce
    # function #4's rules here instead.
    def validate(self, data):
        student = data.get('student')
        course = data.get('course')
        if student and course and student.level != course.level:
            raise serializers.ValidationError("Student level must match the course level.")
        if course and course.teacher is None:
            raise serializers.ValidationError("Course has no teacher assigned yet.")
        return data


# --- Auth ---
class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, min_length=4)

    class Meta:
        model = User
        fields = ['username', 'password', 'email']

    def create(self, validated_data):
        # create_user hashes the password (never store it in plain text)
        return User.objects.create_user(**validated_data)
