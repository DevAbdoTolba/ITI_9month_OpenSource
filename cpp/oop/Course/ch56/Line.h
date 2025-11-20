#include "Point.h"

class Line : public Shape {
    Point start, end;
public:
    Line(int x1, int y1, int x2, int y2, int c) : Shape(c), start(x1, y1), end(x2, y2) {}
    void draw() { cout << "Draw Line Color " << getColor() << endl; }
};
