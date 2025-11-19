#include <iostream>
#include "Creatures.h"

using namespace std;

class Human : public Creatures{
    private:
        string *foo = &(Creatures::names);
    public:
    string name;

    Human(string _name) : Creatures(_name), name(_name){}
    void displayFoo(){
        cout << *foo << endl;
    }

    void setUpperNames(string _names){
        Creatures::names = _names;
    }
};
