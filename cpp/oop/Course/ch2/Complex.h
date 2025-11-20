#include <iostream>

using namespace std;

class Complex {
    float real, imag;
public:
    Complex() { real = 0; imag = 0; cout << "Complex Default Ctor" << endl; }
    Complex(float r, float i) { real = r; imag = i; cout << "Complex Param Ctor" << endl; }
    ~Complex() { cout << "Complex Destructor" << endl; }

    void setComplex(float r, float i) { real = r; imag = i; }
    void print() { cout << real << "+" << imag << "i" << endl; }
};
