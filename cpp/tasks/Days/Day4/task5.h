
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;



template <typename T>
T computeAverage(T arr[], int size){
    T sum = 0;
    for(int i = 0; i < size; i++) sum += arr[i];
    return sum / size;
}


template <>
string computeAverage<string>(string arr[], int size){
    string longest = arr[0];
    for(int i = 1; i < size; i++)
        if(arr[i].length() > longest.length()) longest = arr[i];
    return longest;
}



template <typename T>
T computeAverage(vector<T> v){
    T sum = 0;
    for(auto &x : v) sum += x;
    return sum / v.size();
}


void task5(){


    int arr_i[3] = {2,4,6};
    cout << "Average int = " << computeAverage<int>(arr_i,3) << endl;
    float arr_f[3] = {2.5,4.6,6.7};
    cout << "Average float = " << computeAverage<float>(arr_f,3) << endl;
    double arr_d[3] = {2.5987465,4.6897465,6.6547894};
    cout << "Average double = " << computeAverage<double>(arr_d,3) << endl;

    string sarr[3] = {"cat","elephant","dog"};
    cout << "Longest word = " << computeAverage(sarr,3) << endl;

    vector<double> v = {2.5,4.5,6.5};
    cout << "Vector avg = " << computeAverage(v) << endl;

}

