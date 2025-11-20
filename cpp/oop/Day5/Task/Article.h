#include <iostream>
#include "LearnningMaterial.h"

using namespace std;


class Article : public LearnningMaterial {
    int pages;
public:
    Article(string date, string t, int d, int p)
        : DigitalContent(date), LearnningMaterial(date, t, d), pages(p) {}

    void DisplayInfo()   {
        cout << "[Article] " << title << " - " << pages << " pages." << endl;
    }
};
