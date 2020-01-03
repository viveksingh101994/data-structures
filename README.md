# **DATA STRUCTURE**

This project will cover the topics of linked list, graph, binary trees, trie and hashing.

## **LINKED LIST**

### **Singly Linked List**

![Singly linked list](/assets/singly-linked-list.jpg)

- Each Node holds data along with a forward pointer to the next Node in the list.
- It is unidirectional.

Linked list v/s Array

| Operation        | LinkedList | Array |
| ---------------- | ---------- | ----- |
| access           | O(n)       | O(1)  |
| insert (at head) | O(1)       | O(n)  |
| delete (at head) | O(1)       | O (n) |

The primary operations that generally form a part of the LinkedList class are listed below:

- `insertAtTail(data)` - inserts an element at the end of the linked list
- `insertAtHead(data)` - inserts an element at the start/head of the linked list
- `delete(data)` - deletes an element with your specified value from the linked list
- `deleteAtHead()` - deletes the first element of the list
- `search(data)` - searches for an element in the linked list
- `isEmpty()` - returns true if the linked list is empty

### **Doubly Linked List (DLL)**

![doubly linked list](/assets/doubly-linked-list.jpg)

- Each node contains pointers for both the previous and the next node.
- It is bi-directional.
