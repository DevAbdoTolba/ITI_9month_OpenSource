
## **Notes

- C++ requires the virtual keyword for polymorphism; Java does it by default.
- Manual memory management in C++ requires an explicit "Rule of Three"
- Objects are passed by value, by default - unlike Java's references
- The friend keyword deliberately breaks Java-style encapsulation rules
- C++ supports multiple inheritance, a feature Java replaces with interfaces
- Operator overloading allows to redefine the grammar of language, which Java prohibits
- C++ templates are the powerful, compile-time equivalent of Java generics
- Destructors provide deterministic cleanup, whereas Java relies on its garbage collector
---

### **Chapter 1: Introduction to OOP Principles

**Purpose:** Using object-oriented transitioning from a function-based approach to class-based.

*   **Key Concept: Shifting from organizing code around functions to organizing it around objects that bundle data and behavior.

    *   **Note:** The primary goal is to solve the "Transformation" problem, where real-world entities are more naturally represented as units (objects) with both attributes and functions, rather than as separate, disconnected functions.

*   **Code Example:**
    This initial `Complex` class demonstrates basic encapsulation. Data members (`real`, `imag`) and methods (`add`, `sub`) are grouped together.

    ```cpp
    #include <iostream>
    #include <string>

    using namespace std;

    class Complex {
    public:
        float real;
        float imag;

        void setReal(float r) { real = r; }
        void setImag(float i) { imag = i; }
        float getReal() { return real; }
        float getImag() { return imag; }

        void print() {
            cout << real << (imag >= 0? "+" : "") << imag << "i" << endl;
        }

        Complex add(Complex c) {
            Complex temp;
            temp.real = real + c.real;
            temp.imag = imag + c.imag;
            return temp;
        }
        // ...
    };
    ```

---

### **Chapter 2: Core Class Mechanics**

**Purpose:** To implement the lifecycle and shared behaviors of C++ classes.

*   **Key Concept 1: Explicit Object Lifecycle (Constructors & Destructors)**

    *   **Note:** C++ provides deterministic control over an object's destruction via the **Destructor (`~`)**. This is a fundamental difference from reliance on a garbage collector. The destructor is guaranteed to run the moment an object goes out of scope, allowing for precise resource management.

*   **Code Example (`ch2/Stack.h`):**
    The `Stack` class explicitly defines both its creation (`Stack()`) and cleanup (`~Stack()`) logic.

    ```cpp
    class Stack {
        int *st;
        int top;
        int size;
    public:
        // Constructor: allocates memory
        Stack(int s = 10) {
            size = s;
            top = 0;
            st = new int[size]; // Manual memory allocation
            counter++;
            cout << "Stack Ctor. Objects: " << counter << endl;
        }

        // Destructor: deallocates memory
        ~Stack() {
            delete st; // Manual memory deallocation
            counter--;
            cout << "Stack Dtor. Objects: " << counter << endl;
        }
        // ...
    };
    ```

*   **Key Concept 2: Static Member Initialization**

    *   **Note:** In C++, static member variables must be defined and initialized *outside* the class definition, typically in a corresponding `.cpp` file. This reserves a single piece of memory for the static variable shared by all objects of the class.

*   **Code Example (`ch2/app.cpp`):**
    The `counter` for the `Stack` class is initialized in the global scope.

    ```cpp
    #include "Stack.h"
    //...

    int Stack::counter = 0; // External definition and initialization

    void task2() {
        Stack s1(5);
        // ...
        cout << "Current Stacks: " << Stack::getCounter() << endl;
    }
    ```

---

### **Chapter 3: Advanced Function and Memory Management**

**Purpose:** To correctly manage memory when objects are copied or passed between functions.

*   **Key Concept: The "Dynamic Area Problem" and The Copy Constructor**

    *   **Note:** C++'s default behavior for passing objects to functions is **pass-by-value**, which creates a "bitwise copy." If the object contains pointers, this leads to multiple objects pointing to the same dynamically allocated memory. When one object's destructor is called, it frees the memory, corrupting the other objects. The C++ solution is to provide a **Copy Constructor** to define a "deep copy" procedure.

*   **Instructor's Quote:** "At the end of `viewContent` Function the destructor for object `x` will free the pointer `st` so the object `s` at the main couldn't continue work correctly."

*   **Code Example (`ch3/Stack.h` and `ch3/app.cpp`):**
    The `Stack` class explicitly implements a copy constructor to prevent this error. When `viewContent(s1)` is called, this constructor is invoked to create a safe, independent copy.

    ```cpp
    // ch3/Stack.h
    class Stack {
        // ...
    public:
        // Deep Copy Constructor
        Stack(const Stack &z) {
            top = z.top;
            size = z.size;
            st = new int[size]; // 1. Allocate new memory
            for(int i=0; i<top; i++) {
                st[i] = z.st[i]; // 2. Copy the data
            }
            counter++;
            cout << "Copy Ctor Called" << endl;
        }
        // ...
    };

    // ch3/app.cpp
    void viewContent(Stack s) { // Pass by Value triggers the Copy Constructor
        cout << "Viewing Stack Content: ";
        // ...
    }
    ```

---

### **Chapter 4: Operator Overloading**

**Purpose:** To make user-defined classes more intuitive by allowing them to work with standard operators.

*   **Key Concept: `friend` Functions for Symmetric Operators**

    *   **Note:** When overloading a binary operator like `+`, a member function only works if an object of the class is on the left-hand side (e.g., `c1 + 5`). To handle a case like `5 + c1`, a non-member function is required. A **`friend` function** is a non-member function that is granted special access to the class's `private` and `protected` members.

*   **Code Example (`ch4/Complex.h`):**
    The `Complex` class uses both a member and a `friend` function to handle addition with floats symmetrically.

    ```cpp
    // ch4/Complex.h
    class Complex {
        float real, imag;
    public:
        // Handles `complex + float`
        Complex operator+(float f) { return Complex(real + f, imag); }

        // Friend function handles `float + complex`
        friend Complex operator+(float f, Complex c) { return Complex(f + c.real, c.imag); }
        // ...
    };
    ```

---

### **Chapter 5 & 6: Object Relationships and Inheritance**

**Purpose:** To model how objects interact and build reusable class hierarchies.

*   **Key Concept 1: Composition vs. Aggregation**

    *   **Note:** C++ allows for clear distinctions between object relationships based on ownership. **Composition** implies ownership (a `Rect` *owns* its `Point` objects), while **Aggregation** implies a "uses-a" relationship where the lifecycles are independent (a `Picture` uses `Rect` objects but doesn't own them). Pointers are often used for aggregation.

*   **Code Example (`ch56/Rect.h` and `ch56/Picture.h`):**
    `Rect` contains `Point` objects directly, showing composition. `Picture` contains pointers to `Rect` and `Line` objects, showing aggregation.

    ```cpp
    // ch56/Rect.h
    class Rect : public Shape {
        Point ul, lr; // Composition: Points are part of the Rect
    public:
        Rect(int x1, int y1, int x2, int y2, int c) : Shape(c), ul(x1, y1), lr(x2, y2) {}
        // ...
    };

    // ch56/Picture.h
    class Picture {
        Rect *pRect; // Aggregation: Picture uses Rects but doesn't manage their memory
        Line *pLine;
    public:
        void setRects(Rect *r, int n) { pRect = r; rNum = n; }
        // ...
    };
    ```

*   **Key Concept 2: `public` Inheritance**
    This establishes a clear "is-a" relationship, similar to `extends`.

*   **Code Example (`ch56/Line.h`):**
    A `Line` *is-a* `Shape`, inheriting its `color` member and `getColor()` method.
    ```cpp
    #include "Shape.h"
    // ...
    class Line : public Shape {
        Point start, end;
    public:
        Line(int x1, int y1, int x2, int y2, int c) : Shape(c), start(x1, y1), end(x2, y2) {}
        void draw() { cout << "Draw Line Color " << getColor() << endl; }
    };
    ```

---

### **Chapter 7: Advanced Inheritance Concepts**

**Purpose:** To explore different C++ inheritance strategies.

*   **Key Concept: `protected` Inheritance**

    *   **Note:** This is a C++-specific feature. With `protected` inheritance, `public` members of the base class become `protected` in the derived class. This means they are still accessible to the derived class and its children, but not to the outside world.

*   **Code Example (`ch7/Square.h`):**
    `Square` inherits `GeoShape`'s `dim1` and `dim2` as `protected`, preventing direct manipulation from `main` but allowing `setSquareDim` to access them.

    ```cpp
    #include "GeoShape.h"

    class Square : protected GeoShape { // Protected Inheritance
    public:
        Square(double size) : GeoShape(size, size) {}

        void setSquareDim(double d) {
            // Can access base members here because they are now protected
            dim1 = dim2 = d;
        }

        double calcArea() { return dim1 * dim2; }
    };
    ```

---

### **Chapter 8: Dynamic Behavior and Generics**

**Purpose:** To enable runtime polymorphism and write type-independent code.

*   **Key Concept 1: The `virtual` Keyword for Dynamic Binding**

    *   **Note:** This is a critical difference. In C++, methods are **not** polymorphic by default. For a base class pointer to invoke a derived class's method, the base class method **must** be declared `virtual`. This tells the compiler to use a v-table to look up the correct function at runtime. A pure virtual function (`= 0`) forces a class to be abstract.

*   **Code Example (`ch8/GeoShape.h`):**
    The `calculateArea()` function is declared `virtual` and pure, which allows the `sumOfAreas` function to work polymorphically with any object derived from `GeoShape`.

    ```cpp
    // ch8/GeoShape.h
    class GeoShape {
    public:
        // ...
        // Pure Virtual Function enables dynamic binding and makes the class abstract
        virtual double calculateArea() = 0;
    };

    class Rect : public GeoShape {
    public:
        // ...
        double calculateArea() { return dim1 * dim2; } // Overrides the virtual function
    };

    // This function relies on virtual to call the correct implementation at runtime
    void sumOfAreas(GeoShape *p1, GeoShape *p2, GeoShape *p3) {
        cout << "Total Area = " << p1->calculateArea() + p2->calculateArea() + p3->calculateArea() << endl;
    }
    ```

*   **Key Concept 2: Templates for Generic Programming**

    *   **Note:** C++ **Templates** are a powerful mechanism for creating generic classes and functions. The compiler generates a new, specific version of the class for each type used (`Stack<int>`, `Stack<string>`).

*   **Code Example (`ch8/Stack.h`):**
    This template creates a `Stack` that can hold any data type `T`.

    ```cpp
    // ch8/Stack.h
    template <class T>
    class Stack {
        T *st;
        int top, size;
    public:
        Stack(int s=5) { size = s; top = 0; st = new T[size]; }
        ~Stack() { delete st; }
        void push(T val) { if(top < size) st[top++] = val; }
        T pop() { return (top > 0)? st[--top] : T(); } // Return default T if empty
    };
    ```