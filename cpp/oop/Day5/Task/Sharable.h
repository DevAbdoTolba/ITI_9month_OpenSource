#ifndef SHARABLE_H_INCLUDED
#define SHARABLE_H_INCLUDED


#include <iostream>
#include <string>
#include <vector>
#include "DigitalContent.h"

using namespace std;

class Sharable : virtual public DigitalContent {
public:
    Sharable(string date) : DigitalContent(date) {}

    virtual void Share() { cout << "Sharing material...\n"; }
};

#endif
