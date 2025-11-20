#ifndef RECT_H_INCLUDED
#define RECT_H_INCLUDED

#include <iostream>
#include "Point.h"
#include "Shape.h"

using namespace std;


class Rect : public Shape {
    Point ul, lr; // Composition
public:
    Rect(int x1, int y1, int x2, int y2, int c) : Shape(c), ul(x1, y1), lr(x2, y2) {}
    void draw() { cout << "Draw Rect Color " << getColor() << endl; }
};

#endif
