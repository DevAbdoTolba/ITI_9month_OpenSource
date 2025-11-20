#ifndef DIGITALCONTENT_H_INCLUDED
#define DIGITALCONTENT_H_INCLUDED



#include <iostream>
#include <string>
#include <vector>

using namespace std;


class DigitalContent {
protected:
    string uploadDate;
public:
    DigitalContent(string date) : uploadDate(date) {
        // cout << "DigitalContent Ctor" << endl;
    }
    virtual ~DigitalContent() {}
};

#endif
