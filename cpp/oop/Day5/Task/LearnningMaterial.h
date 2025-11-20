#ifndef LEARNING_MATERIAL_H
#define LEARNING_MATERIAL_H

#include <iostream>
#include "DigitalContent.h"

using namespace std;

class LearnningMaterial : virtual public DigitalContent {
protected:
    string title;
    int duration;
public:
    LearnningMaterial(string date, string t, int d) : DigitalContent(date), title(t), duration(d) {}

    virtual void DisplayInfo() {
        cout << "Material: " << title << " (" << duration << " mins)" << endl;
    }
    virtual ~LearnningMaterial() {}
};
#endif
