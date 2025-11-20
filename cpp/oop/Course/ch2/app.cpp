#include <iostream>
#include "Complex.h"
#include "Stack.h"

using namespace std;




int Stack::counter = 0;

void task1() {
    Complex c1(3, 4);
    c1.print();
}

void task2() {
    Stack s1(5);
    s1.push(10);
    s1.push(20);
    cout << "Popped: " << s1.pop() << endl;
    cout << "Current Stacks: " << Stack::getCounter() << endl;
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
