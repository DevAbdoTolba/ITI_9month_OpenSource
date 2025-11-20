#include "GeoShape.h"
#include "Stack.h"
#include <iostream>

using namespace std;

void task1() {
  // GeoShape g(10,10); // ERROR: Abstract class
  Rect r(10, 20);
  Circle c(7);
  Rect r2(5, 5);

  sumOfAreas(&r, &c, &r2);
}

void task2() {
  Stack<int> sInt;
  sInt.push(10);
  cout << "Int Pop: " << sInt.pop() << endl;

  Stack<string> sString;
  sString.push("Hello C++");
  cout << "String Pop: " << sString.pop() << endl;
}

void run_chapter() {
  void (*loop[])() = {task1};
  int tasks = sizeof(loop) / sizeof(loop[0]);
  for (int i = 0; i < tasks; i++) {
    cout << "///////////////// Task " << i + 1 << " /////////////////" << endl;
    loop[i]();
    cout << "\n DONE!" << endl;
  }
}
