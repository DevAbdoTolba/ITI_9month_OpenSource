#include <iostream>
#include "Square.h"

using namespace std;



void task1() {
    Square sq(10);
    // sq.setDim1(5); // ERROR: Inaccessible due to protected inheritance
    sq.setSquareDim(5); // OK
    cout << "Square Area: " << sq.calcArea() << endl;
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
