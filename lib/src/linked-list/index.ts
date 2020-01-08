import { Node } from './node';

export class LinkedList {
  public head: Node;
  public length: number;
  constructor() {
    this.head = new Node(-1);
    this.length = 0;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public get getHead(): Node {
    return this.head;
  }

  public insertAtHead(dt: any): LinkedList {
    const tempNode = new Node(dt);
    tempNode.nextElement = this.head.nextElement;
    this.head.nextElement = tempNode;
    this.length = this.length + 1;
    return this;
  }

  public insertAtTail(value: any): LinkedList {
    const node = new Node(value);
    let currentNode = this.getHead;
    while (currentNode.nextElement !== null) {
      currentNode = currentNode.nextElement;
    }
    currentNode.nextElement = node;
    this.length += 1;
    return this;
  }

  public search(value: any): boolean {
    let currentNode = this.getHead;
    let isFound = false;
    while (currentNode.nextElement !== null) {
      if (currentNode.data === value) {
        isFound = true;
      }
      currentNode = currentNode.nextElement;
    }
    return isFound;
  }

  public deleteAtHead(): LinkedList {
    const head = this.getHead;
    const firstElement = head.nextElement;
    if (firstElement !== null) {
      head.nextElement = firstElement.nextElement;
      firstElement.nextElement = null;
    }
    this.length -= 1;
    return this;
  }

  public deleteVal(value: any): boolean {
    let deleted = false;
    if (this.isEmpty()) {
      console.log('Empty list');
      return deleted;
    }
    let currentNode = this.getHead.nextElement;
    let previousNode = null;
    if (currentNode.data === value) {
      this.deleteAtHead();
      deleted = true;
      return deleted;
    }

    while (currentNode !== null) {
      if (currentNode.data === value) {
        previousNode.nextElement = currentNode.nextElement;
        currentNode.nextElement = null;
        deleted = true;
        break;
      }
      previousNode = currentNode;
      currentNode = currentNode.nextElement;
    }
    if (!deleted) {
      console.log(String(value), ' is not in list!');
    } else {
      this.length--;
      console.log(String(value), ' deleted!');
    }
    return deleted;
  }

  public reverse(): LinkedList {
    let previousNode = null;
    let currentNode = this.head.nextElement; // The current node
    let nextNode = null; // The next node in the list

    // Reversal
    while (currentNode != null) {
      nextNode = currentNode.nextElement;
      currentNode.nextElement = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }

    // Set the last element as the new head node
    this.head.nextElement = previousNode;

    return this;
  }

  public printList(): void {
    if (this.isEmpty()) {
      console.log('Empty List');
    } else {
      let temp = this.head.nextElement;
      while (temp !== null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(' -> ');
        temp = temp.nextElement;
      }
      console.log('null');
    }
  }
}
