import { LinkedList } from './linked-list/linked-list';

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

LinkedListExecution();
