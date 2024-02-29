class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  contains(value) {
    // Check if the linked list contains a node with the given value
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true; // Value found
      }
      current = current.next;
    }
    return false; // Value not found
  }

}
