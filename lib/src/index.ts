import { Graph } from './graph';
import { LinkedList } from './linked-list';
import { BinarySearchTree } from './binary-tree/binary-search-tree';

function LinkedListExecution(): void {
  const list = new LinkedList();
  list.insertAtHead(2);
  list.insertAtHead(4);
  list.insertAtHead(5);
  list.insertAtHead(7);
  list.insertAtHead(1);
  list.printList();
  list.deleteVal(5);
  list.printList();
  list.reverse();
  list.printList();
}

function GraphExecution(): void {
  const g = new Graph(4);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 3);
  g.addEdge(2, 3);
  g.printGraph();
}

function bfsTraversal(): string {
  const g1 = new Graph(5);
  g1.addEdge(0, 1);
  g1.addEdge(0, 2);
  g1.addEdge(1, 3);
  g1.addEdge(1, 4);
  return g1.bfsTraversal(0);
}

function dfsTraversal(): string {
  const g = new Graph(5);
  g.addEdge(0, 1);
  g.addEdge(0, 2);
  g.addEdge(1, 3);
  g.addEdge(1, 4);
  console.log(g.detectCycle(0));
  g.addEdge(4, 0);
  console.log(g.detectCycle(0));
  return g.dfsTraversal(0);
}

function bst(): void {
  const BST = new BinarySearchTree(6);
  console.log('The root val for BST : ', BST.root.value);
  BST.insertBST(4);
  BST.insertBST(9);
  BST.insertBST(5);
  BST.insertBST(2);
  BST.insertBST(8);
  BST.insertBST(12);
  BST.insertBST(10);
  BST.insertBST(14);

  BST.inOrderPrint(BST.root);
}

LinkedListExecution();
GraphExecution();
console.log(bfsTraversal());
console.log(dfsTraversal());
bst();
