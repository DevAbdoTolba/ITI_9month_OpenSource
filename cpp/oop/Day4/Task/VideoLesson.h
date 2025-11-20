#include <iostream>
#include "LearnningMaterial.h"

using namespace std;

class VideoLesson : public LearninngMaterial {
    string resolution;
public:
    VideoLesson(string t, int d, string res) : LearninngMaterial(t, d), resolution(res) {}

    void DisplayInfo() override {
        cout << "[Video] " << title << " (" << resolution << ") - " << duration << " mins" << endl;
    }
};
