class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
    return this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
