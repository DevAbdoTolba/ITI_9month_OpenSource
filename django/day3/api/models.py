from django.db import models
from django.core.exceptions import ValidationError

LEVEL_CHOICES = [
    ('L1', 'Level 1'), ('L2', 'Level 2'), ('L3', 'Level 3'),
    ('L4', 'Level 4'), ('L5', 'Level 5'), ('L6', 'Level 6'),
]


class Student(models.Model):
    GENDER_CHOICES = [('M', 'Male'), ('F', 'Female')]

    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    image = models.ImageField(upload_to='students/', blank=True, null=True)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    address = models.CharField(max_length=100)
    level = models.CharField(max_length=2, choices=LEVEL_CHOICES)

    def __str__(self):
        return self.name


class Teacher(models.Model):
    name = models.CharField(max_length=100)
    age = models.PositiveIntegerField()
    salary = models.IntegerField()

    def __str__(self):
        return self.name


class Course(models.Model):
    name = models.CharField(max_length=100)
    hours = models.IntegerField()
    level = models.CharField(max_length=2, choices=LEVEL_CHOICES)
    teacher = models.ForeignKey(Teacher, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name


class Enrollment(models.Model):
    GRADE_CHOICES = [('A', 'A'), ('B', 'B'), ('C', 'C'), ('D', 'D'), ('F', 'F')]

    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    grade = models.CharField(max_length=1, choices=GRADE_CHOICES)

    class Meta:
        unique_together = ('student', 'course')

    def __str__(self):
        return f"{self.student} - {self.course} ({self.grade})"

    # The two rules from the assignment (function #4).
    def clean(self):
        if self.student.level != self.course.level:
            raise ValidationError("Student level must match the course level.")
        if self.course.teacher is None:
            raise ValidationError("Course has no teacher assigned yet.")
