export class Node {
  public data: any;
  public nextElement: any;

  constructor(data: any) {
    this.data = data;
    this.nextElement = null;
  }
}
