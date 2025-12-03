#include <iostream>
#define SORT_ARGS int *arr, int _size, int asc

using namespace std;

void display(int[], int);
void SelectionSort(SORT_ARGS = 1);
void InsertionSort(SORT_ARGS = 1);

int main(){

    int arr[]{4,51,2,3,5,6,7};
    int n = sizeof(arr)/sizeof(arr[0]);
    display(arr, n);

    InsertionSort(arr, n, 0);
    display(arr, n);


    return 0;
}

void display(int arr[],int n){

    if (n == 0 ){ cout << "[\t]"; return;}

    cout << "[ ";

    for(int i = 0; i < n; i++ ){
        cout << arr[i] << ",\t";
    }
    cout << " ]" << endl;
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
