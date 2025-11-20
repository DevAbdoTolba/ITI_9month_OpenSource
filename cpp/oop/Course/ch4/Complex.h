#include <iostream>

using namespace std;

class Complex {
    float real, imag;
public:
    Complex(float r=0, float i=0) : real(r), imag(i) {}

    void print() { cout << real << "+" << imag << "i" << endl; }

    Complex operator+(Complex c) { return Complex(real + c.real, imag + c.imag); }
    Complex operator+(float f) { return Complex(real + f, imag); }
    friend Complex operator+(float f, Complex c) { return Complex(f + c.real, c.imag); }

    Complex operator+=(Complex c) { real += c.real; imag += c.imag; return *this; }

    int operator==(Complex c) { return (real == c.real && imag == c.imag); }

    // Prefix
    Complex operator++() { real++; return *this; }
    // Postfix
    Complex operator++(int) { Complex temp = *this; real++; return temp; }

    operator float() { return real; }
};
