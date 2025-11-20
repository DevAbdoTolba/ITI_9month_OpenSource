#include <iostream>
#import "LearnningMaterial.h"
using namespace std;

class InteractiveExercise
: public LearninngMaterial {
    string difficulty;
public:
    InteractiveExercise(string t, int d, string diff) : LearninngMaterial(t, d), difficulty(diff) {}

    void DisplayInfo()   {
        cout << "[Exercise] " << title << " - " << duration << " mins" << endl;
    }
};
