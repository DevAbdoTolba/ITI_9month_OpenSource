#ifndef NODE_H_INCLUDED
#define NODE_H_INCLUDED

template <typename T>
class Node{
    public:
        T val;
        Node* next;
        Node(T _val):val(_val){};
        Node(Node* _next):next(_next){};

};



#endif
