class Student:
    school_name = "ABC High School"
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade

    def __str__(self):
        return "Name: {}\tAge: {}\tGrade: {}".format(self.name, self.age, self.grade)
    
    def update_grade(self, new_grade):
        self.grade = new_grade

    @staticmethod
    def school_motto():
        return "Knowledge is Power"
    

# objects
student1 = Student("Abdo", 21, "A")
student2 = Student("Ahmed", 22, "A+")
student3 = Student("Tolba", 23, "S")

# toString
print(student1)
print(student2)
print(student3)

# setter
student1.update_grade("A+")
print(student1)

# static
print("School Name:", Student.school_name)
print("School Motto:", Student.school_motto())