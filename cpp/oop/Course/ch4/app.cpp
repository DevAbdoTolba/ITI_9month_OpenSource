#include <iostream>
#include "Complex.h"

using namespace std;


void task1() {
    Complex c1(3, 4), c2(1, 2), c3;

    c3 = c1 + c2; cout << "c1 + c2: "; c3.print();
    c3 = c1 + 5;  cout << "c1 + 5: "; c3.print();
    c3 = 5 + c1;  cout << "5 + c1: "; c3.print();

    c1 += c2; cout << "c1 += c2: "; c1.print();

    if(c1 == c2) cout << "Equal" << endl; else cout << "Not Equal" << endl;

    cout << "(float)c1: " << (float)c1 << endl;
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
