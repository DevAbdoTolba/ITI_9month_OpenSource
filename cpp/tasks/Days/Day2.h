#ifndef DAY2_H_INCLUDED
#define DAY2_H_INCLUDED
#include <iostream>
#include <string>
#include <cctype>

using namespace std;

void task1(){
    int degres[10];
    int Max = -1, Min = -1 ;
    float avg = 0;
    int passed = 0, failed = 0;
    cout << "Enter marks of 10 students: " << endl;
    for(int i = 0; i <10 ; i++){
//        cout << "Student " << i+1 << ": " << endl;
        int in; cin >> in;

        if (in > Max || Max == -1) Max = in; if (in < Min || Min == -1) Min = in;

        if (in < 60) failed++; else passed++;

        avg += in;
        degres[i] = in;

    }
    avg /= 10.0;

    cout << "Average = " << avg << endl;
    cout << "Highest = " << Max<< endl;
    cout << "Lowest = "  << Min<< endl;
    cout << "Passed students = " << passed<< endl;
    cout << "Failed students = " << failed<< endl;

    cout << "Marks in descending order:"<<endl;

    for(int i = 0 ; i <10; i++){
        for (int j = 0; j < 10; j++){
            if(degres[j] < degres[j+1]){
                int temp = degres[j];
                degres[j] = degres[j+1];
                degres[j+1] = temp;
            }
        }
    }

    for(int i = 0; i <10 ; i++)
        cout << degres[i] << " ";

// 55 78 90 63 49 88 92 75 60 81

}

void task2(){
    int max_in_B = -1;
    int A[3][3],B[3][3];

    cout << "Enter elements of matrix A (3x3): " <<endl;
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            int in;
            cin >> in;
            A[i][j] = in;

        }
    }
    cout << "Enter elements of matrix B (3x3): " <<endl;
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            int in;
            cin >> in;
            if(in > max_in_B || max_in_B == -1) max_in_B = in;
            B[i][j] = in;
        }
    }

    cout << "Matrix A + B" << endl;
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            cout << (A[i][j] + B[i][j])<< " ";
        }
        cout << endl;
    }

    cout << "Matrix A - B" << endl;
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            cout << A[i][j] - B[i][j] << " ";
        }
        cout << endl;
    }

    cout << "Transpose A" << endl;
    for(int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            cout << A[j][i]<< " ";
        }
        cout << endl;
    }

    cout << "Maximum element in B = " << max_in_B;

    /*
    1 2 3
    4 5 6
    7 8 9

    9 8 7
    6 5 4
    3 2 1




    */

}



void task3(){

    int num_of_chars = 0, num_of_vowls = 0;
    string name;

    cout << "Enter your full name: ";
    getline(cin,name);

    cout << "Number of charchters = ";
    for(int i = 0; i < 100; i++){
            if(name[i] == '\0') break;
            if(name[i] == 'a' ||
               name[i] == 'e' ||
               name[i] == 'i' ||
               name[i] == 'o' ||
               name[i] == 'u' ) num_of_vowls++;
            num_of_chars++;
    }

    cout << num_of_chars << endl;


    cout << "Reversed name = ";
        for(int i = num_of_chars-1; i >= 0; i--){
                cout << name[i];
    }
    cout << endl;


    cout << "Number of vowels = " << num_of_vowls << endl;


    cout << "Title case = ";
    for(int i = 0; i < num_of_chars; i++){
        name[i] = tolower(name[i]);
    }
    for(int i = 0; i < num_of_chars; i++){
        if(i == 0 && isalpha(name[i])) {
            name[i] = toupper(name[i]);
            continue;
        } else if (name[i] == ' ') name[i+1] = toupper(name[i+1]);
    }
    cout << name;
}


#endif // DAY2_H_INCLUDED
