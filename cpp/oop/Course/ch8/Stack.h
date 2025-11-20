// --- Task 2: Template Stack ---
template <class T>
class Stack {
    T *st;
    int top, size;
public:
    Stack(int s=5) { size = s; top = 0; st = new T[size]; }
    ~Stack() { delete st; }
    void push(T val) { if(top < size) st[top++] = val; }
    T pop() { return (top > 0)? st[--top] : 0; }
};
