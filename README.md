# **DATA STRUCTURE** :fearful:

This project will cover the topics of linked list, graph, binary trees, trie and hashing.

## **LINKED LIST**

### **Singly Linked List**

> ![Singly linked list](/assets/singly-linked-list.jpg)

- Each Node holds data along with a forward pointer to the next Node in the list.
- It is unidirectional.

Linked list v/s Array

> | Operation        | LinkedList | Array |
> | ---------------- | ---------- | ----- |
> | access           | O(n)       | O(1)  |
> | insert (at head) | O(1)       | O(n)  |
> | delete (at head) | O(1)       | O(n)  |

The primary operations that generally form a part of the LinkedList class are listed below:

- `insertAtTail(data)` - inserts an element at the end of the linked list
- `insertAtHead(data)` - inserts an element at the start/head of the linked list
- `delete(data)` - deletes an element with your specified value from the linked list
- `deleteAtHead()` - deletes the first element of the list
- `search(data)` - searches for an element in the linked list
- `isEmpty()` - returns true if the linked list is empty

### **Doubly Linked List (DLL)**

> ![doubly linked list](/assets/doubly-linked-list.jpg)

- Each node contains pointers for both the previous and the next node.
- It is bi-directional.

## **Graph**

A graph is a set of nodes that are connected to each other in the form of a network. First of all, we’ll define the two basic components of a graph.

#### Vertex

> A **vertex** is the most essential part of a graph. A collection of vertices forms a graph. In that sense, vertices are similar to linked list nodes.

#### Edge

> An **edge** is the link between two vertices. It can be uni-directional or bi-directional depending on your graph. An edge can also have a cost associated with it which we will discuss in detail later.

#### Visual Representation of the graph

> ![graph](/assets/graph.jpg)

#### Graph Terminologies

- **Degree of a Vertex**: The total number of edges connected to a vertex. There are two types of degrees:

  - **In-Degree**: The total number of incoming edges connected to a vertex.

  - **Out-Degree**: The total number of outgoing edges connected to a vertex.

- **Parallel Edges**: Two undirected edges are parallel​ if they have the same end vertices. Two directed edges are parallel if they have the same origin and destination.

- **Self Loop**: This occurs when an edge starts and ends on the same vertex.

- **Adjacency**: Two vertices are said to be adjacent if there is an edge connecting them directly.

#### Implemenation

- It will be based on adjacency list model.
  > ![graph-adjacency-list-model](/assets/graph-adjacency-list-model.jpg)

#### Time Complexities

> | Operation     | Adjacency List | Adjacency Matrix |
> | ------------- | -------------- | ---------------- |
> | Add Vertex    | O(1)           | O(V^2)           |
> | Remove Vertex | O(V+E)         | O(V^2)           |
> | Add Edge      | O(1)           | O(1)             |
> | Remove Edge   | O(E)           | O(1)             |
