#ifndef DAY3_H_INCLUDED
#define DAY3_H_INCLUDED

#include <iostream>
#include <string>

using namespace std;

int add(int a, int b = 5){
    return a + b;
}

float divide(float a, float b){
    if (b == 0) throw runtime_error("Why this? divisable can not be 0 :/");
    return a / b;
}
int maxNumber(int x, int y, int z){
    if(x > y  && x > z) return x;
    if(y > x  && y > z) return y;
    if(z > x  && z > y) return z;
}

int factorial(int n){

    if (n == 1 || n == 2 || n == 0) return 1;

    return n * factorial(n-1);

}





void task1(){
    int choice;

    cout << "--- Math Utility Menu ---" << endl;
    cout << "1. Add"<< endl;
    cout << "2. Divide"<< endl;
    cout << "3. Max of 3 Numbers"<< endl;
    cout << "4. Factorial"<< endl;
    do{

    cout << "Enter your choice: ";
    cin >> choice;

    }while(!(choice >= 1 && choice <=4));


    switch (choice){
    case 1:
        int option;
        do{
        cout << "1.Add 5 to a number\n2. add two numbers together\n";
        cin >> option;

        } while(!(option == 1 || option == 2));
        switch (option){

        case 1:
            int num;
            cout << "Enter number:";
            cin >> num;
            cout << add(num);
            break;
        case 2:
             int num1,num2;
            cout << "Enter number a:";
            cin >> num1;

            cout << "Enter number b:";
            cin >> num2;
            cout << add(num1,num2);

        break;
        }
    break;

    case 2:
        cout << "Enter two numbers to divide them (Make sure the Second number is not zero!\n";
        float num1,num2; cin >> num1 >> num2;
        cout << divide(num1,num2);
    break;
    case 3:
        cout << "Enter three numbers: \n";
        int num10,num20,num30;
        cin >> num10 >> num20 >> num30;
        cout << maxNumber(num10,num20,num30);
        break;
    case 4:
        cout << "Enter number: "; int num; cin >> num;
        cout << factorial(num);



    }


}





/** \brief
 *
 * \param
 * \param
 * \return
 *
 */




 void inputArray(int arr[], int &arr_size){

    for( int i = 0; i < 100; i ++){
    int num; cin >> num;
    if( num == -1 || num == 99) return;
    arr[arr_size] = num;
    (arr_size)++;
    }
    return;
 }
 int findMax(int arr[], int arr_size){

    int maxNum = arr[0];
    for(int i = 0; i < arr_size; i++){
        if(arr[i] > maxNum) maxNum = arr[i];
    }

    return maxNum;

 }


 int findMin(int arr[], int arr_size){

    int minNum = arr[0];
    for(int i = 0; i < arr_size; i++){
        if(arr[i] < minNum) minNum = arr[i];
    }

    return minNum;
 }


 float findAverage(int arr[], int arr_size){

    int avg = 0;
    for(int i = 0; i < arr_size; i++){
       avg += arr[i];
    }

    return (avg / arr_size);

 }


 void sortArray(int arr[], int arr_size){
     int* sorted_arr = new int[arr_size];

     for(int i = 0; i < arr_size; i++){
        sorted_arr[i] = arr[i];
     }

     for(int i = 0 ; i < arr_size; i++){
        for (int j = 0; j < arr_size; j++){
            if(sorted_arr[j] > sorted_arr[j+1]){
                int temp = sorted_arr[j];
                sorted_arr[j] = sorted_arr[j+1];
                sorted_arr[j+1] = temp;
            }
        }
    }

    for(int i = 0; i < arr_size; i++){
        cout << sorted_arr[i] << " ";
    }


 }


 int* squareArray(int arr[], int arr_size){
    int* squared_res = new int[arr_size];
    for(int i = 0; i < arr_size; i++){
        squared_res[i] = arr[i]*2;
    }

    return squared_res;


 }

void do_magic(int arr[], int arr_size){

    cout << "Max = " << findMax(arr,arr_size) << endl;
    cout << "Min = " << findMin(arr,arr_size) << endl;
    cout << "Average = " << findAverage(arr,arr_size); cout << endl;
    cout << "Sorted Array = "; sortArray(arr,arr_size) ; cout << endl;
    cout << "Squared Array = ";
    int* squared_array = squareArray(arr,arr_size);
    for(int i = 0; i < arr_size; i++){
        cout << squared_array[i] << " ";
    }

}


 void task2(){

 int arr[100];
 int arr_size = 0;
 cout << "Enter numbers (end with -1): \n";
 inputArray(arr,arr_size);

 do_magic(arr,arr_size);


 }







 /** \brief
  *
  * \param
  * \param
  * \return
  *
  */





int countVowels(string s){
    int numOfVowels = 0;

    for(int i = 0; i < s.length(); i++){
        if(tolower(s[i]) == 'a' ||
           tolower(s[i]) == 'o' ||
           tolower(s[i]) == 'u' ||
           tolower(s[i]) == 'i' ||
           tolower(s[i]) == 'e'
           ) numOfVowels++;

    }
    return numOfVowels;
}

string reverseString(string s){
    string s_op = s;
    for(int i = s.length()-1, j = 0; i >= 0; i--, j++){
        s_op[j] = s[i];
    }
    return s_op;

}

int countWords(string s){
    int numOfWords = 0;
    for(int i = 0; i < s.length(); i++){
        if(s[i] == ' ' || s[i] == '\0') {
            if(numOfWords == 0) numOfWords = 2;
            else numOfWords++;
        }
    }

    return numOfWords;

}

string toTitleCase(string s){
    string s_op = s;
    s_op[0] = toupper(s[0]);
    for(int i = 1; i < s_op.length()-1; i++){
        if(s_op[i] == ' ') s_op[i+1] = toupper(s_op[i+1]);
    }

    return s_op;
}


bool isPalindrome(string s){
    int last = s.length()-1;
    if(s.length() <= 1) return true;
    if (s[0] == s[last]){
    string s_sub = "";
    for(int i = 1; i < last; i++){
        s_sub += s[i];
    }
    return isPalindrome(s_sub);
    } else return false;
}

void task3(){
    string str;
    cout << "Enter a sentence: ";

    getline(cin,str);
    cout << str << endl;




    cout << "Vowels: " << countVowels(str) << endl;
    cout << "Reverse: " << reverseString(str) << endl;
    cout << "Words: " << countWords(str) << endl;
    cout << "Title case: " << toTitleCase(str) << endl;
    cout << "Palindrome? " << ((isPalindrome(str)) ? "Yes" : "No") << endl;
}


/** \brief
 *
 * \param
 * \param
 * \return
 *
 */



float withDraw(float balance, float amount){

 if(amount < 0)
    throw invalid_argument("Withdrawal amount cannot be negative");

 if (amount > balance)
    throw runtime_error("Insufficient balance");
 return balance - amount;

}

void task4(){

    int balance = 5000;


    int amount = 0;
    cout << "Your current balance = " << balance << endl;
    do{
        int input;
        cout << "Enter amount to withdraw (0 to quit): "; cin >> input;
        amount = input;
        if(amount == 0) break;
        try{
        balance = withDraw(balance, amount);
        cout << "Withdrawal successful! Remaining balance = " << balance << endl;
        } catch(runtime_error e){
            cout << "Error: " << e.what() << endl;
        } catch(invalid_argument e){
            cout << "Error: " << e.what() << endl;
        }
     } while(amount != 0);

     cout << "Thank you for using our service.";


}



#endif // DAY3_H_INCLUDED
