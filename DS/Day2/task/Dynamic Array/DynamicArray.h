#ifndef DYNAMICARRAY_H_INCLUDED
#define DYNAMICARRAY_H_INCLUDED

#include <stdexcept>
#include <iostream>

using namespace std;

template <typename T>
class DynamicArray{

    public:
        T *arr;
        int _size;
        int _count;

        DynamicArray(int n): arr(new T[n]{}), _size(n), _count(0){};

        // Helper to double the array size
        void expand() {
            int new_capacity = (_size == 0) ? 1 : _size * 2;
            T *new_arr = new T[new_capacity];

            for(int i = 0; i < _count; i++) {
                new_arr[i] = arr[i];
            }

            delete[] arr;
            arr = new_arr;
            _size = new_capacity;
        }


        T get_at(int i){
            if(i < 0 || i >= _count) throw out_of_range("Index out of bounds");
            return arr[i];
        }

        void set_at(int i, T x){
            if(i < 0 || i >= _count) throw out_of_range("Index out of bounds");
            arr[i] = x;
        }

        void insert_first(T x){
            if(_count >= _size) expand();

            for(int i = _count; i > 0; i--){
                arr[i] = arr[i-1];
            }
            arr[0] = x;
            _count++;
        }

        T delete_first(){
            if(_count == 0) throw out_of_range("Array is empty");

            T val = arr[0];
            for(int i = 0; i < _count - 1; i++){
                arr[i] = arr[i+1];
            }
            _count--;
            return val;
        }

        void insert_last(T x){
            if(_count >= _size) expand();

            arr[_count] = x;
            _count++;
        }

        T delete_last(){
             if(_count == 0) throw out_of_range("Array is empty");

             T val = arr[_count - 1];
             _count--;
             return val;
        }

        T delete_at(int i){
            if(i < 0 || i >= _count) throw out_of_range("Index out of bounds");

            T val = arr[i];
            for(int j = i; j < _count - 1; j++){
                arr[j] = arr[j+1];
            }
            _count--;
            return val;
        }

        void insert_at(int i, T x){
            if(i < 0 || i > _count) throw out_of_range("Index out of bounds");
            if(_count >= _size) expand();

            for(int j = _count; j > i; j--){
                arr[j] = arr[j-1];
            }
            arr[i] = x;
            _count++;
        }

        void display() {
            cout << "[ ";
            for(int i=0; i<_count; i++) cout << arr[i] << " ";
            cout << "] (Size: " << _size << ")" << endl;
        }
};

#endif
