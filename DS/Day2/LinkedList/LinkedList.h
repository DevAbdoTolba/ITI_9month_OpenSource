#ifndef LINKED_H_INCLUDED
#define LINKED_H_INCLUDED
#include <iostream>
#include "Node.h"

using namespace std;

template <typename T>
class LinkedList{
  public:
    Node<T>* head = nullptr;

    void Build(T* items, int _size){
        Node<T>* last = nullptr;
        for(int i =0; i<_size; i++){
            Node<T>* node= new Node<T>(items[i]);

            if(head == nullptr){
                head = node;
                last = head;
            } else {
                last->next = node;
                last = node;
            }
        }
    }

    T get_at(int location){
        Node<T> *start = head;
        for(int i=1; i<location; i++){
            if(start == nullptr) throw ("location out of range");
            else start = start->next;
        }
        if(start == nullptr) throw ("location out of range");
        return start->val;
    }

    void insert_at(int location, T value){
        if(location == 1){
            insert_first(value);
            return;
        }

        Node<T>* temp = head;

        for(int i = 1; i < location - 1; i++){
            if(temp == nullptr) throw ("location out of range");
            temp = temp->next;
        }

        Node<T>* node = new Node<T>(value);
        node->next = temp->next;
        temp->next = node;
    }

    T delete_first(){
        if(head == nullptr) throw ("List is empty");

        Node<T>* temp = head;
        T val = head->val;

        head = head->next;

        delete temp;
        return val;
    }

    void insert_first(T value){
        Node<T>* node = new Node<T>(value);
        node->next = head;
        head = node;
    }

    T delete_last(){
        if(head == nullptr) throw ("List is empty");

        if(head->next == nullptr){
            T val = head->val;
            delete head;
            head = nullptr;
            return val;
        }

        Node<T>* temp = head;
        while(temp->next->next != nullptr){
            temp = temp->next;
        }

        T val = temp->next->val;
        delete temp->next;
        temp->next = nullptr;
        return val;
    }

    void insert_last(T value){
        Node<T>* node = new Node<T>(value);

        if(head == nullptr){
            head = node;
            return;
        }

        Node<T>* temp = head;
        while(temp->next != nullptr){
            temp = temp->next;
        }
        temp->next = node;
    }

    T delete_at(int location){
           if(location < 1) throw ("location out of range");
           if(head == nullptr) throw ("List is empty");

           if(location == 1) return delete_first();

           Node<T>* current = head;

           for(int i = 1; i < location - 1; i++){
               if(current->next == nullptr) throw ("location out of range");
               current = current->next;
           }

           Node<T>* nodeToDelete = current->next;

           if(nodeToDelete == nullptr) throw ("location out of range");

           T val = nodeToDelete->val;
           current->next = nodeToDelete->next;
           delete nodeToDelete;

           return val;
       }

    void display(){
        cout << "LinkedLIST: { ";
        auto start = head;
        while(start->next != nullptr){
            cout << start->val << ",\t";
            start = start->next;
        }
        cout << start->val << " }" << endl;
    }
};

#endif
