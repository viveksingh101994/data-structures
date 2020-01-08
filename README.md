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

## **Tree**

Trees consist of vertices (nodes) and edges that connect them. Trees are hierarchical. They are similar to Graphs, except that a cycle cannot exist in a Tree - they are acyclic. In other words, there is always exactly one path between any two nodes.

#### Common Terminologies used in trees

- **Sub-tree**: For a particular non-leaf node, a collection of nodes, essentially the tree, starting from its child node. The tree formed by a node and its descendants.

- **Degree of a node**: Total number of children of a node

- **Length of a path**: The number of edges in a path

- **Depth of a node n**: The length of the path from a node n to the root node. The depth of the root node is 0.

- **Level of a node n**: (Depth of a Node)+1

- **Height of a node n**: The length of the path from n to its deepest descendant. The height of the tree itself is the height of the root node, and the height of leaf nodes is always 0.

- **Height of a Tree**: Height of its root node

#### Types of Tree

- Binary Trees
- Binary Search Trees
- AVL Trees
- Red-Black Trees
- 2-3 Trees

#### What makes a tree 'balanced'

`|Height(LeftSubTree) - Height(RightSubTree) |<= 1∣Height(LeftSubTree)−Height(RightSubTree)∣<=1`

#### Binary Trees

> Binary Search Trees (BSTs) are a special kind of binary tree where each node of the tree has key-value pairs

##### The BST Rule

> For all the nodes in a BST, the values of all the nodes in the left subtree of a node are less than the value of that node. All the values in the right subtree of a node are greater than the value of that node. This is referred to as the BST rule.

`NodeValues(left subtree of Node n) << Node Value of Node n << NodeValues(right subtree of Node n)`

## **Trie**

Tree-like data structure that proves to be very efficient while solving programming problems related to strings.

#### Common Applications of Tries

- Autocomplete Words
- Spell-Checking
- Searching for a Phone Contact

#### Properties of a Trie

- Tries are similar to graphs as they are a combination of nodes where each node represents a unique alphabet.

- Each node can point to null or other children nodes.

- The size of a trie depends upon the number of alphabets. For example, in English, there are 26 letters so the number of unique nodes cannot exceed 26.

- The depth of a trie depends on the longest word that it stores.

- Another important property of a trie is that it provides the same path for words that share a common prefix. For example, “there” and “their” have a common prefix “the”. Hence, they will share the same path until “e”. After that, the path will split into two branches. This is the backbone of the trie functionality.

> ![trie-model](/assets/trie.jpg)
