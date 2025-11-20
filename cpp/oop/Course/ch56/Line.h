#ifndef LINE_H_INCLUDED
#define LINE_H_INCLUDED

#include <iostream>
#include "Point.h"
#include "Shape.h"

using namespace std;

class Line : public Shape {
    Point start, end;
public:
    Line(int x1, int y1, int x2, int y2, int c) : Shape(c), start(x1, y1), end(x2, y2) {}
    void draw() { cout << "Draw Line Color " << getColor() << endl; }
};

#endif
