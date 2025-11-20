#include <iostream>
#include "Rect.h"
#include "Line.h"
#include "Picture.h"

using namespace std;


void task1() {
    Rect rArr[2] = { Rect(10,10,50,50,1), Rect(20,20,60,60,2) };
    Line lArr[1] = { Line(0,0,100,100,3) };

    Picture pic;
    pic.setRects(rArr, 2);
    pic.setLines(lArr, 1);

    pic.paint();
}

// void run_chapter() {
//   void (*loop[])() = {task1};
//   int tasks = sizeof(loop) / sizeof(loop[0]);
//   for (int i = 0; i < tasks; i++) {
//     cout << "///////////////// Task " << i + 1 << " /////////////////" << endl;
//     loop[i]();
//     cout << "\n DONE!" << endl;
//   }
// }


void run_chapter() {
    cout << "Fe 7aga 3'alat!!!"
}
