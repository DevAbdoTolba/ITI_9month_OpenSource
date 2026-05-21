from django import forms
from .models import Teacher, Student, Course, Enrollment


# Adds Bootstrap classes to every widget so we don't repeat ourselves on each form.
class StyledForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for field in self.fields.values():
            widget = field.widget
            if isinstance(widget, (forms.Select, forms.SelectMultiple)):
                widget.attrs.setdefault('class', 'form-select')
            elif isinstance(widget, (forms.CheckboxInput, forms.FileInput)):
                widget.attrs.setdefault('class', 'form-control')
            else:
                widget.attrs.setdefault('class', 'form-control')


# A ModelForm builds an HTML form straight from a model.
class TeacherForm(StyledForm):
    class Meta:
        model = Teacher
        fields = ['name', 'age', 'salary']


class StudentForm(StyledForm):
    class Meta:
        model = Student
        fields = ['name', 'phone', 'image', 'age', 'gender', 'address', 'level']


class CourseForm(StyledForm):
    class Meta:
        model = Course
        fields = ['name', 'hours', 'level', 'teacher']


class EnrollmentForm(forms.ModelForm):
    class Meta:
        model = Enrollment
        fields = ['student', 'course', 'grade']
    # NOTE: is_valid() runs Enrollment.clean(), so function #4's rules
    # (level match + course has a teacher) show up as form errors automatically.
