
#include <iostream>
#include <vector>
#include <ctime>
#include <cstdarg>
#include <math.h>
#include <chrono>


using namespace std;


void MIN_foo(int& current_min, int compared_value);
void MAX_foo(int& current_max, int& compared_value);
void AVG_foo(int& avg, int sum , int num);

void task1(){
    srand(time(0));
    int MIN,MAX,AVG, sum = 0;

    cout << "Enter the number of reads coming from the sensor" << endl;
    int num_of_reads = 0; cin >> num_of_reads;

    for (int i = 0; i < num_of_reads; i++){

        auto temp_read = (rand()%21)-5;
        try{
        if(temp_read < 0 ){
            throw runtime_error("Temp read can not be below 0!");
        }
        if(i == 0) {
            MIN = temp_read;
            MAX = temp_read;
        } else{
            MIN_foo(MIN, temp_read);
            MAX_foo(MAX, temp_read);

        }
            sum += temp_read;
        cout << "Value number " << i+1 << ": " << temp_read << endl;

        } catch(runtime_error e){
            cout << "Error: in value (" << temp_read << "). " << e.what() << endl;
            i--;
        }
    }

    AVG_foo(AVG,sum,num_of_reads);

    cout << "Min :" << MIN << endl;
    cout << "Max :" << MAX << endl;
    cout << "AVG :" << AVG << endl;



}

void MIN_foo(int& current_min, int compared_value){

    if (current_min > compared_value) current_min = compared_value;

}
void MAX_foo(int& current_max, int& compared_value){

    if (current_max < compared_value) current_max = compared_value;

}
void AVG_foo(int& avg, int sum , int num ){
    avg = sum / num;
}



