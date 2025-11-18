
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;





struct Student{
    string name;
    int age;
    float grade;
};

// Generic template for searching students by a field using a predicate.
template<typename T, typename Pred>
void searchBy(vector<Student>& students, const string& prompt, const T& value, Pred pred) {
    if(!prompt.empty()) cout << prompt;
    bool found = false;
    for(const auto& s : students) {
        if(pred(s, value)) {
            cout << "Found: " << s.name << ", Age: " << s.age << ", Grade: " << s.grade << endl;
            found = true;
        }
    }
    if(!found) cout << "No students found.\n";
}

void addStudent(vector<Student>& students){
    Student s;
    cout << "Enter name, age, grade: ";
    cin >> s.name >> s.age >> s.grade;
    students.push_back(s);
}

void showAll(vector<Student>& students){
    for(auto &s : students)
        cout << s.name << " (" << s.age << ") grade=" << s.grade << endl;
}

void searchStudent(vector<Student>& students){
    string input;
    cout << "Enter name, age, or grade to search: ";
    cin >> input;
    try {
        int val = stoi(input);
        // it's an integer, ask age or grade
        cout << "Search by age or grade? (a/g): ";
        char choice;
        cin >> choice;
        if(choice == 'a'){
            searchBy<int>(students, "", val, [](const Student& s, int a){ return s.age == a; });
        } else if(choice == 'g'){
            searchBy<float>(students, "", (float)val, [](const Student& s, float g){ return s.grade == g; });
        } else {
            cout << "Invalid choice.\n";
        }
    } catch(...) {
        //  search by name
        searchBy<string>(students, "", input, [](const Student& s, const string& n){ return s.name == n; });
    }
}

void task6(){
    vector<Student> students;
    void (*menu[])(vector<Student>&) = {addStudent, showAll, searchStudent};
    int choice;
    do{
        cout << "\n1.Add 2.Show 3.Search 0.Exit\nChoice: ";
        cin >> choice;
        if(choice>=1 && choice<=3) menu[choice-1](students);
        else cout << "invalid choice!";
    }while(choice != 0);
}

