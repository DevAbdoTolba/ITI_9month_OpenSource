
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;




  void swapPtr(int **a, int **b){
    int *temp = *a;
    *a = *b;
    *b = temp;
}


void task4(){
    int arr[5] = {10,20,30,40,50};
    int *p = arr;

    cout << "Array content using pointer iterator:" << endl;
    for(int i = 0; i < 5; i++)
        cout << *(p + i) << " ";

    cout << endl;

    const int *constValuePtr = arr;
    cout << "\nFirst element (const value pointer) = " << *constValuePtr << endl;

    int a = 1, b = 2;
    cout << "Before swap: a=" << a << ", b=" << b << endl;

    int *pa = &a, *pb = &b;
    swapPtr(&pa, &pb);
    cout << "After swap: a=" << a << ", b=" << b << endl;
}





