#include <iostream>
#include <string>

using namespace std;

class Complex {
public:
    float real;
    float imag;

    void setReal(float r) { real = r; }
    void setImag(float i) { imag = i; }
    float getReal() { return real; }
    float getImag() { return imag; }

    void print() {
        cout << real << (imag >= 0? "+" : "") << imag << "i" << endl;
    }

    Complex add(Complex c) {
        Complex temp;
        temp.real = real + c.real;
        temp.imag = imag + c.imag;
        return temp;
    }

    Complex sub(Complex c) {
        Complex temp;
        temp.real = real - c.real;
        temp.imag = imag - c.imag;
        return temp;
    }
};
