from django.core.exceptions import ValidationError
from udempy.models import Student, Course, Teacher, Enrollment

# clean slate so the demo is repeatable
Enrollment.objects.all().delete()
Course.objects.all().delete()
Student.objects.all().delete()
Teacher.objects.all().delete()

# --- create some rows ---
t  = Teacher.objects.create(name="Mr. Ali", age=40, salary=9000)
s  = Student.objects.create(name="Sara", phone="0100", age=20, gender="F", address="Cairo", level="L1")
c  = Course.objects.create(name="Python", hours=40, level="L1")   # NOTE: no teacher yet
print("Setup done. Course teacher is:", c.teacher)

print("\n--- FUNCTION 2: assign teacher to course ---")
c.assign_teacher(t)
print("Now course teacher is:", c.teacher)

print("\n--- FUNCTION 1: add course to student with grade ---")
e = s.add_course(c, "A")
print("Created enrollment:", e.student.name, "->", e.course.name, "grade", e.grade)

print("\n--- FUNCTION 4a: wrong level should be REJECTED ---")
s_l3 = Student.objects.create(name="Omar", phone="0200", age=22, gender="M", address="Giza", level="L3")
try:
    s_l3.add_course(c, "B")          # student L3, course L1 -> mismatch
    print("BUG: it allowed a level mismatch!")
except ValidationError as err:
    print("Correctly blocked ->", err.messages)

print("\n--- FUNCTION 4b: course without teacher should be REJECTED ---")
c_noteacher = Course.objects.create(name="Java", hours=30, level="L1")  # no teacher
try:
    s.add_course(c_noteacher, "C")
    print("BUG: it allowed a course with no teacher!")
except ValidationError as err:
    print("Correctly blocked ->", err.messages)

print("\n--- FUNCTION 3: filters (any model, any field) ---")
print("L1 students:", list(Student.objects.filter(level="L1").values_list("name", flat=True)))
print("Teachers earning 9000:", list(Teacher.objects.filter(salary=9000).values_list("name", flat=True)))
print("40-hour courses:", list(Course.objects.filter(hours=40).values_list("name", flat=True)))
