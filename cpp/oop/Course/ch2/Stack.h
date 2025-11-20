#include <iostream>

using namespace std;

class Stack {
    int *st;
    int top;
    int size;
public:
    static int counter;

    Stack(int s = 10) {
        size = s;
        top = 0;
        st = new int[size];
        counter++;
        cout << "Stack Ctor. Objects: " << counter << endl;
    }


    ~Stack() {
        delete st;
        counter--;
        cout << "Stack Dtor. Objects: " << counter << endl;
    }

    void push(int n) {
        if(top == size) cout << "Stack Full" << endl;
        else st[top++] = n;
    }

    int pop() {
        if(top == 0) { cout << "Stack Empty" << endl; return -1; }
        else return st[--top];
    }

    static int getCounter() { return counter; }
};
