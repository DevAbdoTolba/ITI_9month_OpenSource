
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;


template<typename T>
void analyze(int COUNT, ...);

template<>
void analyze<string>(int COUNT, ...);

 void task2(){
     srand(time(0));
        int value1 = rand() % 101;
        int value2 = rand() % 101;
        int value3 = rand() % 101;
        int value4 = rand() % 101;
        int value5 = rand() % 101;
        try{
        analyze<int>(5, value1, value2, value3, value4, value5);
        analyze<string>(3, "String", "Concate", "All");
        } catch(invalid_argument e){
            cout << "Error: " << e.what() << endl;
        }
 }


template<typename T>
 void analyze(int COUNT, ...){
    va_list args;

    va_start(args,COUNT);
    if(COUNT <= 0) {
        throw invalid_argument("analyze: zero arguments");
    }
    int avg, var = 0, sum = 0, var_sum = 0;


    vector<int> vec;
    for(int i = 0; i < COUNT; i++){
        vec.push_back(va_arg(args,int));
    }


    for(int i = 0; i < COUNT; i++){
        sum += vec[i];
    }

    avg = sum / COUNT;

    for(int i = 0; i < COUNT; i++){
        var_sum += pow(vec[i] - avg,2);
    }

    var = var_sum / (COUNT - 1);
    cout << "(";
    for(auto it : vec) cout << it << " ";
    cout << ")"<< endl;
    cout << "Average = " << avg << endl;
    cout << "Variance = " << var;

 }

template<>
void analyze<string>(int COUNT, ...){
    va_list args;

    va_start(args,COUNT);
    if(COUNT <= 0) {
        throw invalid_argument("analyze: zero arguments");
    }


    string result = "";
    for (int i = 0; i < COUNT; i++){
        auto sub_str = va_arg(args, char*);
        result += sub_str;

        if(i+1 < COUNT) result += " ";
    }
    cout << endl << result;

}










