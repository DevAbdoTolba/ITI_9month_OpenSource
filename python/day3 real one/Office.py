import json
from Employee import Employee

class Office:
    employeesNum = 0

    def __init__(self, name):
        self.name = name
        self.employees = []

    def get_all_employees(self):
        return self.employees

    def get_employee(self, empId):
        for emp in self.employees:
            if emp.id == empId:
                return emp
        return None

    def hire(self, employee):
        self.employees.append(employee)
        Office.change_emps_num(1)

    def fire(self, empId):
        for emp in self.employees:
            if emp.id == empId:
                self.employees.remove(emp)
                Office.change_emps_num(-1)
                return True
        return False

    def deduct(self, empId, deduction):
        emp = self.get_employee(empId)
        if emp:
            emp.salary -= deduction
            return True
        return False

    def reward(self, empId, reward):
        emp = self.get_employee(empId)
        if emp:
            emp.salary += reward
            return True
        return False
    
    def check_lateness(self, empId, moveHour):
        emp = self.get_employee(empId)
        if emp:
            if Office.calculate_lateness(9, moveHour, emp.distanceToWork, emp.car.velocity):
                self.deduct(empId, 10)
                return "Late"
            else:
                self.reward(empId, 10)
                return "Not Late"
        return "Employee 404"

    @staticmethod
    def calculate_lateness(targetHour, moveHour, distance, velocity):
        time_needed = distance / velocity
        arrival_time = moveHour + time_needed
        return arrival_time > targetHour

    @classmethod
    def change_emps_num(cls, num):
        cls.employeesNum += num

    # export office
    def export(self):
        with open(f"{self.name}.json", "w") as file:
            json.dump(self.__dict__, file, default=lambda o: o.__dict__, indent=3)