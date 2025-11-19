#include <iostream>
#include "classes/Inheritance/Human.h"

using namespace std;

int main(){

    Human me("Tolba");
    me.displayFoo();
    me.setUpperNames("wah");
    me.displayFoo();


    return 0;
}
