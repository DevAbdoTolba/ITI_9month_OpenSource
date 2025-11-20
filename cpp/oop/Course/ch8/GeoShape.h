#include <iostream>

using namespace std;

// --- Task 1: Polymorphism ---
class GeoShape {
protected:
    double dim1, dim2;
public:
    GeoShape(double d1, double d2) : dim1(d1), dim2(d2) {}
    // Pure Virtual Function -> Abstract Class
    virtual double calculateArea() = 0;
};

class Rect : public GeoShape {
public:
    Rect(double w, double h) : GeoShape(w, h) {}
    double calculateArea() { return dim1 * dim2; }
};

class Circle : public GeoShape {
public:
    Circle(double r) : GeoShape(r, r) {}
    double calculateArea() { return 3.14 * dim1 * dim2; } // dim1=dim2=r
};

void sumOfAreas(GeoShape *p1, GeoShape *p2, GeoShape *p3) {
    cout << "Total Area = " << p1->calculateArea() + p2->calculateArea() + p3->calculateArea() << endl;
}
