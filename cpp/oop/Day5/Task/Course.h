#include <iostream>
#include <vector>
#include "LearnningMaterial.h"

using namespace std;

class Course {
    string courseName;
    vector<LearnningMaterial*> content; // Vector of base class pointers

public:
    Course(string name) : courseName(name) {
        cout << "--- Course Created: " << courseName << " ---" << endl;
    }

    ~Course() {
        cout << "\n--- Destroying Course: " << courseName << " ---" << endl;
        for (size_t i = 0; i < content.size(); i++) {
            delete content[i];
        }
        content.clear();
    }

    void AddMaterial(LearnningMaterial* mat) {
        content.push_back(mat);
    }

    void ShowCourseContent() {
        cout << "\nCourse Content: " << courseName << endl;
        cout << "-----------------------------------" << endl;
        for (size_t i = 0; i < content.size(); i++) {
            content[i]->DisplayInfo();
        }
        cout << "-----------------------------------" << endl;
    }
};
