#ifndef LEARNING_MATERIAL_H
#define LEARNING_MATERIAL_H

#include <iostream>

using namespace std;

class LearninngMaterial {
protected:
    string title;
    int duration; // in minutes

public:
    LearninngMaterial(string t, int d) : title(t), duration(d) {}

    // Virtual destructor is CRITICAL when deleting derived objects via base pointer
    virtual ~LearninngMaterial() {
        cout << "Deleting Material: " << title << endl;
    }

    virtual void DisplayInfo() {
        cout << "[Material] Title: " << title << ", Duration: " << duration << " mins" << endl;
    }
};

#endif
