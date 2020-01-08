export class Node {
  public leftChild: any;
  public rightChild: any;
  public value: any;

  constructor(value: any) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}
