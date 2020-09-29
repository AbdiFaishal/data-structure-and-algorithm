/*
------- Cmponarisons with Array------
List :
- Do not have indexes!
- Connected via nodes with a next pointer
- Random access is not allowed

Array : 
- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a specific index
*/

/* 
Pushing pseudocode
- This function should accept a value
- Create a new node using the value passed to the function
- If there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
- Incremenet the length by one 
*/

/*
Popping pseudocode
- If there are no nodes in the list, return undefined
- Loop through the list until you react the tail
- Set the next propery of the 2nd to last node to be null
- Set the tail to be the 2nd to last node
- Decremenet the length of the list by 1
- Return the value of the node removed
*/

/*
Shifting pseudocode
- If there are no nodes, return undefined
- Store the current head property in a variable
- Set the head property in a variable
- Set the head property to be the current head's next property
- Decrement the length by 1
- Return the value of the node removed
*/

/*
Unshifting pseudocode
- This function should accept a value
- Create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list
*/

/*
Get pseudocode
- This function should accept a value
- Create a new node using the value passed to the function
- if there is no head property on the list, set the head and tail to be the newly created node
- Otherwise set the newly created node's next property to be the current head property on the list
- Set the head property on the list to be that newly created node
- Increment the length of the list by 1
- Return the linked list
*/

/*
Set Pseudocode
- This function should accept an index and a value
- Use your get function to find the specific node
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true
*/

/*
Insert Pseudocode
- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list 
- Otherwise, using the get method, access the node at the index -1
- Set the next property on that node to be the new node
- Set the next property on the new node to be the previous next
- Increment the length
- Return true
*/

// Piece of data - val
// Reference to the next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;

    let curHead = this.head;
    this.head = curHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return curHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let curHead = this.head;
    if (!curHead) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.head.next = curHead;
    }
    this.length += 1;
    return list;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter = 0;
    let node = this.head;

    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  set(index, val) {
    let currentNode = this.get(index);
    if (currentNode) {
      currentNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(val);
    } else if (index === 0) {
      this.unshift(val);
    } else {
      let newNode = new Node(val);
      let prev = this.get(index - 1);
      newNode.next = prev.next;
      prev.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prev = this.get(index - 1);
    let removedNode = prev.next;
    prev.next = removedNode.next;
    this.length--;

    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    let arr = [];
    let node = this.head;
    for (let i = 0; i < this.length; i++) {
      arr.push(node.val);
      node = node.next;
    }
    return arr;
  }
}
