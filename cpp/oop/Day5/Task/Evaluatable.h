#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Evaluatable {
public:
    virtual void Evaluate() = 0; // Pure virtual
    virtual ~Evaluatable() {}
};
