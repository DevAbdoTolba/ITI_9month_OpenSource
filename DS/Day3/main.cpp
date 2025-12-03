#include <iostream>
#define UTIL_ARGS int[], int
#define SORT_ARGS int *arr, int _size, int asc

using namespace std;

// ==================================
// ===========Utilities==============
// ==================================
void display (UTIL_ARGS);
void isSorted(UTIL_ARGS, int asc = 1);
// ==================================
// ==================================
// ==================================



void SelectionSort(SORT_ARGS = 1);
void InsertionSort(SORT_ARGS = 1);

int main(){

    int arr[]{4,51,2,9,5,6,0,7};
    int n = sizeof(arr)/sizeof(arr[0]);
    display(arr, n);

    isSorted(arr, n);


    return 0;
}

void display(int arr[],int n){

    if (n == 0 ){ cout << "[\t]"; return;}

    cout << "[ ";

    for(int i = 0; i < n-1; i++ ){
        cout << arr[i] << ",\t";
    }
    cout << arr[n-1] << " ]" << endl;
}

void isSorted(int arr[], int n, int asc){
    bool sorted = true;
    for(int i = 0; i < n-1; i++){
        if(arr[i] <= arr[i+1]) continue;
        else sorted = false; break;
    }
    cout << (sorted ? "SORTED :D": "NOT SORTED ;(");
}


void SelectionSort(SORT_ARGS){
    for(int i=0; i<_size-1; i++){
        int indefOfMin = i;
        for(int j = i+1; j < _size; j++){

            bool condition;

            if (asc == 1) {
                condition = (arr[j] < arr[indefOfMin]);
            } else {
                condition = (arr[j] > arr[indefOfMin]);
            }

            if(condition){
                indefOfMin = j;
            }


        }

        int temp = arr[i];
        arr[i] = arr[indefOfMin];
        arr[indefOfMin] = temp;
    }
}

void InsertionSort(SORT_ARGS){

    for(int i = 1; i < _size; i++){
        int insertionValue = arr[i];
        int j = i-1;
        while (j >= 0 and (asc == 1? arr[j]>insertionValue : arr[j]<insertionValue) ) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = insertionValue;
    }
}
