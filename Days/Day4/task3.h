
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;




 struct Employee{
    int ID;
    string name;
    int salary = 0;
 };


 struct Department{
    string name;
    vector<Employee> employees;

 };

 int totalSalary(const Department &d){
    int sum = 0;
    for(auto &e : d.employees) sum += e.salary;
    return sum;
}


bool recursiveSearchEmployee(const vector<Department>& depts, const string &name, Employee &out, size_t dept_idx = 0, size_t emp_idx = 0){

    if (dept_idx >= depts.size()) return false;
    const auto& dept = depts[dept_idx];

    if (emp_idx >= dept.employees.size()) {
        return recursiveSearchEmployee(depts, name, out, dept_idx + 1, 0);
    }
    const auto& e = dept.employees[emp_idx];

    if (e.name == name) {
        out = e;
        return true;
    }
    return recursiveSearchEmployee(depts, name, out, dept_idx, emp_idx + 1);

}

void printDepartment(const Department * const dptr){
    cout << "Department: " << dptr->name << '\n';
    for(const auto &e: dptr->employees){
        cout << "  Employee: " << e.name << " (ID: " << e.ID << ", Salary: " << e.salary << ")\n";
    }
}

 void task3(){

    vector<Department> depts(2);
    vector<Employee> emp(5);


    emp[0].ID = 1; emp[0].name = "Ahmed"; emp[0].salary = 1000;
    emp[1].ID = 2; emp[1].name = "Mohamed"; emp[1].salary = 1500;
    emp[2].ID = 3; emp[2].name = "Fatima"; emp[2].salary = 2200;
    emp[3].ID = 4; emp[3].name = "Khaled"; emp[3].salary = 1800;
    emp[4].ID = 5; emp[4].name = "Laila"; emp[4].salary = 3000;

    depts[0].name = "HR";
    depts[0].employees.push_back(emp[0]);
    depts[0].employees.push_back(emp[1]);
    depts[0].employees.push_back(emp[2]);
    depts[1].name = "IT";
    depts[1].employees.push_back(emp[3]);
    depts[1].employees.push_back(emp[4]);


    const Department *maxDept = &depts[0];
    for(int i = 1; i < 2; i++){
        if(totalSalary(depts[i]) > totalSalary(*maxDept))
            maxDept = &depts[i];
    }

    cout << "Department with highest total salary: " << maxDept->name << endl;

     cout << "Displaying departments:\n";
    for(const auto &d : depts){
        printDepartment(&d);
    }
    cin.ignore();
    cout << "Search emoployee by name: ";
    string q; getline(cin, q);

    Employee found;
    if(recursiveSearchEmployee(depts, q, found)){
        cout << "Employee found: " << found.name << " ID: " << found.ID << " Salary: " << found.salary << '\n';
    } else {
        cout << "Employee \"" << q << "\" not found.\n";
    }

 }


