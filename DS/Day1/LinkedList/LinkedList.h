#ifndef LINKED_H_INCLUDED
#define LINKED_H_INCLUDED
#include "Node.h"


template <typename T>
class LinkedList{
  public:
    Node<int>* head = nullptr;
    void Build(T* items, T _size){
        Node<int>* pre;
        for(int i =0; i<_size; i++){
            Node<int>* node= new Node(items[i]);

            if(head == nullptr){
                head = node;
                pre = head;
            } else {
                pre->next = node;
                pre = node;
            }
        }
    }
};


#endif
