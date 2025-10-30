#include <iostream>
#include <string>
#include <cctype>
#include "Days/Day4.h"

using namespace std;


int main()
{

    void (*loop[])() ={task1,task2,task3,task4,task5,task6,task7,task8};

    int num_of_foos = sizeof(loop) / sizeof(loop[0]);
    for(int i = 0; i < num_of_foos; i++){
        cout << "Start? y/n: ";
        char ch; cin >> ch; cout << ch;
        if(ch == 'n') break;
        else if ( (ch - '0') >= 0 && (ch - '0') <= num_of_foos) i = (ch - '0') - 1;
        cout << "\n\n\n\n\n\n";
        cout << "/////////////////////////////// Task" << i+1 <<  " ///////////////////////////////" << endl;
        loop[i]();
        cout << "\n\n\n\n DONE!" << endl;
    }

    return 0;
}
