export class Stack {
  public items: any[];
  public top: any;
  constructor() {
    this.items = [];
    this.top = null;
  }

  public getTop(): null | any {
    if (this.items.length === 0) {
      return null;
    }
    return this.top;
  }

  public isEmpty(): boolean {
    return this.items.length === 0;
  }

  public size(): number {
    return this.items.length;
  }

  public push(element): void {
    this.items.push(element);
    this.top = element;
  }

  public pop(): null | any {
    if (this.items.length !== 0) {
      if (this.items.length === 1) {
        this.top = null;
        return this.items.pop();
      } else {
        this.top = this.items[this.items.length - 2];
        return this.items.pop();
      }
    } else {
      return null;
    }
  }
}
