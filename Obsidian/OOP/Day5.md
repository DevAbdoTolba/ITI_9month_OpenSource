

# Multiple inheirtance

Diamond problem :)

## Setup

* **Key Concept: Base class {Hardware} inherited by 2 classes {Sensor, ESP} which are inherited by one class {Smart Sensor}!
  * **Note:** When calling a function in the Base
* Diagram Example:
```uml
			Hardware
        /      \
       /        \
     Sensor    ESP
       \        /
        \      /
       SmartSensor
```
* Code Example:
	```cpp
	#include <iostream>
	using namespace std;
	class Hardware {
		public:
	    void start() { std::cout << "Hardware Started\n"; }
	};
	
	class Sensor : Hardware {};
	class ESP : Hardware {};
	
	class SmartSensor : Sensor, ESP {};
	
	int main() {
	    SmartSensor ss;
	    ss.start(); 
	    return 0;
	}
	```

so for that we do *Virtual Inheritance* :)

## Solve

* Code Example:
```cpp
#include <iostream>
using namespace std;

class Hardware {
	public:
    void start() { std::cout << "Hardware Started\n"; }
};

class Sensor : virtual Hardware {};
class ESP : virtual Hardware {};

class SmartSensor : Sensor, ESP {};

int main() {
    SmartSensor ss;
    ss.start(); 
    return 0;
}
```


# Abstraction

## Pure virtual Function

idk bro...

`virtual void Start()=0;`

could be in the class Vechiel. But keep in mind now it is an **abstract class

so now this is not allowed:
`Vechiel v;` // ERROR ;(

but you can do a referencing approach :)
`Vechiel *v;` // GOOD :D


## Interface ??? (something)

idk man

## Virtual Destructor

- [Gemini](https://gemini.google.com/app/ba8fac76f3261f8d):

```cpp
#include <iostream>

// 1. The Base Class
//    Defines the interface for polymorphic objects.
class Shape {
public:
    // A virtual destructor is essential for any base class with virtual functions.
    virtual ~Shape() {}

    // The "Virtual Constructor": a pure virtual clone() method.
    // It forces derived classes to implement their own creation logic.
    virtual Shape* clone() const = 0;

    // A regular virtual function to prove we have the correct object type.
    virtual void draw() const = 0;
};

// 2. A Derived Class
class Circle : public Shape {
public:
    // The implementation of the "Virtual Constructor" for Circle.
    // It knows how to create a copy of itself.
    Shape* clone() const   {
        return new Circle(*this); // Creates a new Circle on the heap
    }

    void draw() const   {
        std::cout << "I am a Circle." << std::endl;
    }
};

// 3. Another Derived Class
class Square : public Shape {
public:
    // The implementation for Square.
    Shape* clone() const   {
        return new Square(*this); // Creates a new Square on the heap
    }

    void draw() const   {
        std::cout << "I am a Square." << std::endl;
    }
};

// 4. The Demonstration
int main() {
    // We start with a base class pointer to a derived object.
    // We don't necessarily know its concrete type is 'Circle'.
    Shape* original = new Circle();

    // *** THE KEY LINE ***
    // We create a new object using only the base class pointer.
    // The virtual clone() method ensures the correct derived object is created.
    Shape* copy = original->clone();

    // Prove that the copy is the correct type (a Circle)
    std::cout << "Original object says: ";
    original->draw();

    std::cout << "Copied   object says: ";
    copy->draw();

    // Clean up memory
    delete original;
    delete copy;

    return 0;
}
```

### Explanation

1.  **`Shape`** is our abstract base class. It cannot be instantiated. It declares a pure virtual function `clone()` which returns a `Shape*`. This forces any class that inherits from `Shape` to provide an implementation for `clone()`.

2.  **`Circle`** and **`Square`** are concrete derived classes. They each   `clone()`. Their implementation is simple: `return new Circle(*this);`. They create a new object of their own specific type and return a base `Shape*` pointer to it.

3.  **In `main()`**, we create a `Circle` but store it in a `Shape*` pointer named `original`. The crucial line is `Shape* copy = original->clone();`. At this point, the code only knows it has a `Shape*`. It calls the `clone()` method on it. Because `clone()` is `virtual`, C++ performs a virtual function call, finds that `original` actually points to a `Circle`, and executes `Circle::clone()`. This correctly creates a **new `Circle`** object.

This demonstrates the power of the pattern: you can duplicate an object in a polymorphic hierarchy without needing to know its specific derived type. You only need a base class pointer.
