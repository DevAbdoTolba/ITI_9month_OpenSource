#ifndef SEQUANCE_ARRAY_H_INCLUDED
#define SEQUANCE_ARRAY_H_INCLUDED
#include <stdexcept>

using namespace std;

template <typename  T>
class SequanceArray{

    public:
        T *arr;
        T _size;
        T _count;

        SequanceArray(T n): arr(new T[n]{}), _size(n), _count(0){};

        T get_at(T i){
            if( !(i<_count && i>=0) )throw out_of_range("Address out of poundres ;(");
            return arr[i];
        }

        void set_at(int i, int x){
            if( !(i<_count && i>=0) )throw out_of_range("Address out of poundres ;(");
            arr[i] = x;
        }

        void insert_first(T x){
            if(_count < _size-1){
                for(int i = _count; i >-1;i--){
                    arr[i+1] = arr[i];
                }
                arr[0] = x; _count++;
            }
        }
};

#endif
