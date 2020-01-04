export class Queue {
  public items: any[];
  constructor() {
    this.items = [];
  }

  public isEmpty() {
    return this.items.length === 0;
  }

  public getFront(): any[] | null {
    if (this.items.length !== 0) {
      return this.items[0];
    } else {
      return null;
    }
  }

  public size(): number {
    return this.items.length;
  }

  public enqueue(element) {
    this.items.push(element);
  }

  public dequeue() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.items.shift();
    }
  }
}
