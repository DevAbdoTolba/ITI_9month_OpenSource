#include <iostream>
#include "Complex.h"

using namespace std;


void task1() {
    Complex c1, c2, c3;
    float r, i;

    cout << "Enter Real and Imag for C1: ";
    cin >> r >> i;
    c1.setReal(r); c1.setImag(i);

    cout << "Enter Real and Imag for C2: ";
    cin >> r >> i;
    c2.setReal(r); c2.setImag(i);

    c3 = c1.add(c2);
    cout << "C1 + C2 = "; c3.print();

    c3 = c1.sub(c2);
    cout << "C1 - C2 = "; c3.print();
}

void run_chapter() {
    void (*loop[])() = {task1};
    int tasks = sizeof(loop)/sizeof(loop[0]);
    for(int i=0; i<tasks; i++) {
        cout << "///////////////// Task " << i+1 << " /////////////////" << endl;
        loop[i]();
        cout << "\n DONE!" << endl;
    }
}
