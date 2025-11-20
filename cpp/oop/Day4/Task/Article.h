#include <iostream>
#include "LearnningMaterial.h"

using namespace std;


class Article : public LearninngMaterial {
    int pageCount;
public:
    Article(string t, int d, int pages) : LearninngMaterial(t, d), pageCount(pages) {}

    void DisplayInfo() override {
        cout << "[Article] " << title << ", Pages: " << pageCount << ", Time: " << duration << " mins" << endl;
    }
};
