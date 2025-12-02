#include "LinkedList/LinkedList.h"
#include "Dynamic Array/DynamicArray.h"

using namespace std;

int main(){

    LinkedList<int> ls;
    ls.insert_first(1);
    ls.insert_first(2);
    ls.insert_first(3);
    ls.insert_first(4);
    ls.insert_first(5);

    ls.display();

    ls.insert_last(6);
    ls.insert_last(7);

    ls.display();

    ls.insert_at(3, 100);

    ls.display();

    ls.get_at(3);

    ls.delete_first();

    ls.display();

    ls.delete_last();

    ls.display();

    ls.delete_at(2);

    ls.display();

    int arr_build[] = {10, 20, 30};
    LinkedList<int> ls2;
    ls2.Build(arr_build, 3);

    ls.display();


    DynamicArray<int> da(2);
    da.insert_first(1);
    da.insert_first(2);
    da.insert_first(3);
    da.insert_first(4);

    da.display();

    da.insert_last(6);
    da.insert_last(7);

    da.display();

    da.insert_at(3, 100);

    da.display();

    da.set_at(0, 999);
    da.get_at(0);

    da.display();

    da.delete_first();

    da.display();

    da.delete_last();

    da.display();

    da.delete_at(2);

    da.display();

    return 0;
}
