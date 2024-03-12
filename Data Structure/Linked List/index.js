class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    if (index <= 1) {
      return this.prepend(value);
    }
    const newNode = new Node(value);

    let leader = this.traverseToIndex(index - 1);

    const holdingPointer = leader.next;

    leader.next = newNode;
    newNode.next = holdingPointer;

    this.length++;
    return this;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return;
    let leader = this.traverseToIndex(index);
    console.log("test", leader);
    let removeItem = leader.next;
    leader.next = removeItem.next;
    this.length--;
    return this;
  }

  traverseToIndex(whatever) {
    console.log("test index", whatever);
    //check params
    let count = 0;
    let currentNode;
    while (count !== whatever) {
      currentNode = this.head.next;

      count++;
    }

    return currentNode;
  }

  convertToArray() {
    let count = 0;
    let arr = [];
    let tempObj = this.head;

    while (count < this.length) {
      arr.push(tempObj.value);
      tempObj = tempObj.next;
      count++;
    }
    return arr;
  }
}

const myLinkedList = new LinkedList(10);

myLinkedList.prepend(1);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.insert(2, 99);
myLinkedList.remove(2);
console.log(myLinkedList);
console.log(myLinkedList.convertToArray());
