# lab i


def multiplication_table(number):
    output = []
    for i in range(1, 11):
        row = []
        for j in range(1, number + 1):
            row.append(i * j)
        output.append(row)
    print(output)



def calculate_area(shape, dimension1, dimension2=None):
    import math
    if shape == "t":
        area = 0.5 * dimension1 * dimension2
    elif shape == "r":
        if dimension2 is None:
            dimension2 = dimension1 
        area = dimension1 * dimension2
    elif shape == "c":
        area = math.pi * (dimension1 ** 2)
    print(area)



def dictionrize_list(input_list):
    output = {}
    for name in sorted(input_list):
        alpha = name[0]
        if alpha not in output:
            output[alpha] = []
        output[alpha].append(name)
    print(output)


def mario_pyramid(number):
    for i in range(1, number + 1):
        spaces = ' ' * (number - i)
        stair = '*' * i
        print(spaces + stair)




# multiplication_table(3)
# calculate_area("t", 5, 10)
# calculate_area("r", 2, 4)
# calculate_area("r", 2)
# calculate_area("c", 5)
# dictionrize_list(["Abdelrahman", "Ahmed", "Mohamed", "Ahmed", "Tolba"])
# mario_pyramid(4)



import csv

def create_files():
    students_data = [
        ['student_id', 'name'],
        ['1', 'asd'],
        ['2', 'tolba'],
        ['3', 'tolba2']
    ]

    grades_data = [
        ['student_id', 'subject', 'grade'],
        ['1', 'Python', '85'],
        ['1', 'Math', '90'],
        ['2', 'Python', '78'],
        ['3', 'Python', '92'],
        ['3', 'Math', '88']
    ]

    try:
        with open('students.txt', 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerows(students_data)
            
        with open('grades.txt', 'w', newline='') as file:
            writer = csv.writer(file)
            writer.writerows(grades_data)
            
        print("Task 1: Files OK.")
    except Exception as e:
        print(f"Error: {e}")

def display_students():
    print("\nTask 2: Names")
    try:
        with open('students.txt', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                print("- " + row['name'])
    except FileNotFoundError:
        print("No students.txt file.")

def display_python_grades():
    print("\nTask 3: Python")
    try:
        with open('grades.txt', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['subject'] == 'Python':
                    print(f"ID {row['student_id']}: {row['grade']}")
    except FileNotFoundError:
        print("No grades.txt file.")

def lookup_student():
    print("\nTask 4: Find Student")
    student_id = input("Enter ID: ")
    student_name = ""
    
    try:
        with open('students.txt', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['student_id'] == student_id:
                    student_name = row['name']
                    break
    except FileNotFoundError:
        print("No students.txt file.")
        return

    if student_name == "":
        print("No student found.")
        return
        
    print(f"\nName: {student_name}")
    print("Grades:")
    
    total_grade = 0
    subject_count = 0
    
    try:
        with open('grades.txt', 'r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                if row['student_id'] == student_id:
                    print(f"- {row['subject']}: {row['grade']}")
                    try:
                        total_grade += int(row['grade'])
                        subject_count += 1
                    except ValueError:
                        print(f"  (Bad number in {row['subject']})")
    except FileNotFoundError:
        print("No grades.txt file.")
        return

    if subject_count > 0:
        average = total_grade / subject_count
        print(f"\nAverage: {average}")
    else:
        print("\nNo grades for average.")


# create_files()
# display_students()
# display_python_grades()
lookup_student()