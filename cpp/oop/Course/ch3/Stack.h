#include <iostream>

using namespace std;

class Stack {
    int *st;
    int top;
    int size;
public:
    static int counter;
    Stack(int s = 10) {
        size = s; top = 0; st = new int[size];
        counter++;
    }

    // Deep Copy Constructor
    Stack(const Stack &z) {
        top = z.top;
        size = z.size;
        st = new int[size];
        for(int i=0; i<top; i++) st[i] = z.st[i];
        counter++;
        cout << "Copy Ctor Called" << endl;
    }

    ~Stack() {
        delete st;
        counter--;
        cout << "Destructor. Remaining: " << counter << endl;
    }

    void push(int n) { if(top<size) st[top++] = n; }
    int getContent(int i) { return st[i]; }
    int getTop() { return top; }
};
