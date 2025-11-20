#include <iostream>
#include "LearnningMaterial.h"
#include "Sharable.h"

using namespace std;


class VideoLesson : public LearnningMaterial, public Sharable {
    string resolution;
public:
    // RULE: Most derived class must initialize the virtual base (DigitalContent)
    VideoLesson(string date, string t, int d, string res)
        : DigitalContent(date), LearnningMaterial(date, t, d), Sharable(date), resolution(res) {}

    void DisplayInfo()   {
        cout << "[Video] " << title << " [" << resolution << "] Uploaded: " << uploadDate << endl;
    }

    void Share()   {
        cout << ">> Sharing Video: " << title << " (Link generated)" << endl;
    }
};
