#include <iostream>
#include "LearnningMaterial.h"

using namespace std;

class Quiz : public LearninngMaterial {
    int questionCount;
public:
    Quiz(string t, int d, int q) : LearninngMaterial(t, d), questionCount(q) {}

    void DisplayInfo() override {
        cout << "[Quiz] " << title << ", Questions: " << questionCount << ", Time: " << duration << " mins" << endl;
    }
};
