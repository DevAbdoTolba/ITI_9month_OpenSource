#include <iostream>
#include "LearnningMaterial.h"
#include "Evaluatable.h"

using namespace std;

class Quiz : public LearnningMaterial, public Evaluatable {
    int questions;
public:
    Quiz(string date, string t, int d, int q)
        : DigitalContent(date), LearnningMaterial(date, t, d), questions(q) {}

    void DisplayInfo() {
        cout << "[Quiz] " << title << " with " << questions << " questions." << endl;
    }

    // pure virtual function
    void Evaluate()  {
        cout << ">> Grading Quiz: " << title << " (Calculated Score: 85/100)" << endl;
    }
};
