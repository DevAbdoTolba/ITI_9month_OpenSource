
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;


double add(double a,double b){return a+b;}
double mul(double a,double b){return a*b;}
double divi(double a,double b){return (b==0)?a:a/b;}

double applyRec(vector<double> &nums, double (*f)(double,double), int i=0){
    if(i == nums.size()-1) return nums[i];
    return f(nums[i], applyRec(nums, f, i+1));
}

void task8(){
    double (*ops[])(double,double) = {add,mul,divi};


    vector<double> v = {2,4,8,5};
    int ch;
    do{

        cout << "Select (-1 exit)" << endl << "1:Add" << endl << "2:Mul" << endl << "3:Div" << endl;
        try{
            cin >> ch;
            if( ch == -1) break;
            if(ch < 1 || ch > 3) throw runtime_error("Out of range selection!");

            cout << "Result = " << applyRec(v, ops[ch-1]) << endl;
        } catch(runtime_error e){
            cout << "Error: " << e.what() << endl;
        }

    } while (ch != -1);
}






