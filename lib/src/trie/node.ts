export class Node {
  public children: any[];
  public isEndWord: boolean;
  public char: string;
  constructor(char) {
    this.children = new Array(26).fill(null);
    this.isEndWord = false; // will be true if the node represents the end of word
    this.char = char; // To store the value of a particular key
  }
  // Function to mark the currentNode as Leaf
  public markAsLeaf(): void {
    this.isEndWord = true;
  }

  // Function to unMark the currentNode as Leaf
  public unMarkAsLeaf(): void {
    this.isEndWord = false;
  }
}
