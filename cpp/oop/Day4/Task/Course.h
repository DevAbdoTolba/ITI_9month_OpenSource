#include <iostream>
#include <vector>
#include "LearnningMaterial.h"

using namespace std;

class Course {
    string courseName;
    vector<LearninngMaterial*> content; // Vector of base class pointers

public:
    Course(string name) : courseName(name) {
        cout << "--- Course Created: " << courseName << " ---" << endl;
    }

    ~Course() {
        cout << "\n--- Destroying Course: " << courseName << " ---" << endl;
        // Cleanup: Delete all dynamically allocated materials
        for (size_t i = 0; i < content.size(); i++) {
            delete content[i];
        }
        content.clear();
    }

    void AddMaterial(LearninngMaterial* mat) {
        content.push_back(mat);
    }

    void ShowCourseContent() {
        cout << "\nCourse Content: " << courseName << endl;
        cout << "-----------------------------------" << endl;
        for (size_t i = 0; i < content.size(); i++) {
            // Polymorphic call: executes the specific DisplayInfo for each type
            content[i]->DisplayInfo();
        }
        cout << "-----------------------------------" << endl;
    }
};
