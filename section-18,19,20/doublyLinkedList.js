/*
Pushing pseudocode
- Create a new node with the value passed to the function
- If the head property is null set the head and tail to be the newly created node 
- If not, set the next property on the tail to be that node
- Set the previous property on the newly created node to be the tail
- Set the tail to be the newly created node
- Increment the length
- Return the Doubly Linked List
*/

/*
Popping pseudocode
- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be the previous Node
- Set the newTail's next to null
- Decrement the length
- Return the value removed
*/

/*
Shifting pseudocode
- If length 0, return undefined
- Store the current head property in a variable (we'll call it old head)
- If the length is one
  *set the head to be null
  *set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev property to null
- set the old head's next to null
- Decrement the length
- Return old head
*/

/*
Get pseudocode
- If the index is less than 0 or greater or equal to the length, return null
- if the index is less than or equal to half the length of the list
  *Loop through the list starting from the head and loop towards the middle
  *Return the node once it is found
- If the index is greater than half the length of the list 
  *Loop through the list starting from the tail and loop towards the middle
  *Return the node once it is found
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter, current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (index !== counter) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (index !== counter) {
        current = current.next;
        counter--;
      }
    }
    return current;
  }

  set(index, val) {
    let node = this.get(index);

    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let afterNode = prevNode.next;
    if (index === 0) {
      this.unshift(val);
    } else if (index === this.length) {
      this.push(val);
    } else {
      afterNode.prev = newNode;
      newNode.next = prevNode.next;
      newNode.prev = prevNode;
      prevNode.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const afterNode = removedNode.next;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}
