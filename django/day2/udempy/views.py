from django.shortcuts import render, redirect, get_object_or_404
from .models import Teacher, Student, Course, Enrollment
from .forms import TeacherForm, StudentForm, CourseForm, EnrollmentForm


def index(request):
    return render(request, 'udempy/index.html')


# ============================ TEACHER ============================
def teacher_list(request):
    teachers = Teacher.objects.all()
    q = request.GET.get('q')
    if q:
        teachers = teachers.filter(name__icontains=q)
    return render(request, 'udempy/teacher_list.html', {'teachers': teachers, 'q': q})


def teacher_create(request):
    if request.method == 'POST':
        form = TeacherForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('teacher_list')
    else:
        form = TeacherForm()
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Add Teacher', 'list_url': 'teacher_list'})


def teacher_update(request, pk):
    teacher = get_object_or_404(Teacher, pk=pk)
    if request.method == 'POST':
        form = TeacherForm(request.POST, instance=teacher)
        if form.is_valid():
            form.save()
            return redirect('teacher_list')
    else:
        form = TeacherForm(instance=teacher)
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Edit Teacher', 'list_url': 'teacher_list'})


def teacher_delete(request, pk):
    teacher = get_object_or_404(Teacher, pk=pk)
    if request.method == 'POST':
        teacher.delete()
        return redirect('teacher_list')
    return render(request, 'udempy/confirm_delete.html',
                  {'object': teacher, 'list_url': 'teacher_list'})


# ============================ STUDENT ============================
def student_list(request):
    students = Student.objects.all()
    q = request.GET.get('q')          # search by name
    level = request.GET.get('level')  # filter by level
    if q:
        students = students.filter(name__icontains=q)
    if level:
        students = students.filter(level=level)
    return render(request, 'udempy/student_list.html',
                  {'students': students, 'q': q, 'level': level,
                   'levels': Student.LEVEL_CHOICES})


def student_create(request):
    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES)   # FILES = uploaded image
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm()
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Add Student', 'list_url': 'student_list'})


def student_update(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'POST':
        form = StudentForm(request.POST, request.FILES, instance=student)
        if form.is_valid():
            form.save()
            return redirect('student_list')
    else:
        form = StudentForm(instance=student)
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Edit Student', 'list_url': 'student_list'})


def student_delete(request, pk):
    student = get_object_or_404(Student, pk=pk)
    if request.method == 'POST':
        student.delete()
        return redirect('student_list')
    return render(request, 'udempy/confirm_delete.html',
                  {'object': student, 'list_url': 'student_list'})


# ============================ COURSE ============================
def course_list(request):
    courses = Course.objects.all()
    q = request.GET.get('q')
    level = request.GET.get('level')
    if q:
        courses = courses.filter(name__icontains=q)
    if level:
        courses = courses.filter(level=level)
    return render(request, 'udempy/course_list.html',
                  {'courses': courses, 'q': q, 'level': level,
                   'levels': Course.LEVEL_CHOICES})


def course_create(request):
    if request.method == 'POST':
        form = CourseForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('course_list')
    else:
        form = CourseForm()
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Add Course', 'list_url': 'course_list'})


def course_update(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == 'POST':
        form = CourseForm(request.POST, instance=course)
        if form.is_valid():
            form.save()
            return redirect('course_list')
    else:
        form = CourseForm(instance=course)
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Edit Course', 'list_url': 'course_list'})


def course_delete(request, pk):
    course = get_object_or_404(Course, pk=pk)
    if request.method == 'POST':
        course.delete()
        return redirect('course_list')
    return render(request, 'udempy/confirm_delete.html',
                  {'object': course, 'list_url': 'course_list'})


# ========================== ENROLLMENT ==========================
def enrollment_list(request):
    enrollments = Enrollment.objects.all()
    grade = request.GET.get('grade')      # filter by grade
    if grade:
        enrollments = enrollments.filter(grade=grade)
    return render(request, 'udempy/enrollment_list.html',
                  {'enrollments': enrollments, 'grade': grade,
                   'grades': Enrollment.grades})


def enrollment_create(request):
    if request.method == 'POST':
        form = EnrollmentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('enrollment_list')
    else:
        form = EnrollmentForm()
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Add Enrollment', 'list_url': 'enrollment_list'})


def enrollment_update(request, pk):
    enrollment = get_object_or_404(Enrollment, pk=pk)
    if request.method == 'POST':
        form = EnrollmentForm(request.POST, instance=enrollment)
        if form.is_valid():
            form.save()
            return redirect('enrollment_list')
    else:
        form = EnrollmentForm(instance=enrollment)
    return render(request, 'udempy/form.html',
                  {'form': form, 'title': 'Edit Enrollment', 'list_url': 'enrollment_list'})


def enrollment_delete(request, pk):
    enrollment = get_object_or_404(Enrollment, pk=pk)
    if request.method == 'POST':
        enrollment.delete()
        return redirect('enrollment_list')
    return render(request, 'udempy/confirm_delete.html',
                  {'object': enrollment, 'list_url': 'enrollment_list'})
