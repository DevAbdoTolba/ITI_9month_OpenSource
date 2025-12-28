#include "Array/SequanceArray.h"
#include "LinkedList/LinkedList.h"

#include <iostream>
using namespace std;
int main() {

  LinkedList<int> ls;
  SequanceArray<int> arr(10);
  arr.insert_first(5);
  arr.insert_first(50);
  arr.insert_first(500);

  cout << arr.get_at(0);
  return 0;
}
