#include "GeoShape.h"

class Square : protected GeoShape { // Protected Inheritance
public:
    Square(double size) : GeoShape(size, size) {}

    void setSquareDim(double d) {
        // We can access setDim1/2 here because we inherited them
        // But main() cannot see them
        dim1 = dim2 = d;
    }

    double calcArea() { return dim1 * dim2; }
};
