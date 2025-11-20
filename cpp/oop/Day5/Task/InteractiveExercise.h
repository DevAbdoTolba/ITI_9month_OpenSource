#include <iostream>
#include "DigitalContent.h"
#include "LearnningMaterial.h"
using namespace std;

class InteractiveExercise
: public LearnningMaterial {
    string difficulty;
    string date;
public:
    InteractiveExercise(string Date, string t, int d, string diff) : DigitalContent(Date), LearnningMaterial(Date, t, d), difficulty(diff), date(Date) {}

    void DisplayInfo()   {
        cout << "[Exercise] " << title << " - " << duration << " mins" << endl;
    }
};
