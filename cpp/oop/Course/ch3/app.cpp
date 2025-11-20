#include <iostream>
#include "Stack.h"

using namespace std;


int Stack::counter = 0;

void viewContent(Stack s) { // Pass by Value
    cout << "Viewing Stack Content: ";
    for(int i=0; i<s.getTop(); i++) cout << s.getContent(i) << " ";
    cout << endl;
}

void task1() {
    Stack s1(5);
    s1.push(10); s1.push(20); s1.push(30);

    cout << "Calling ViewContent (Pass by Value)..." << endl;
    viewContent(s1);
    cout << "Back in Task1" << endl;
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
