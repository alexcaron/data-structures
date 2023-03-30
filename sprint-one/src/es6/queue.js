class Queue {
  constructor() {
    this.storage = {};
    this.end = 0;
  }

  enqueue(value) {
    this.end += 1;
    this.storage[this.end] = value;
  }

  dequeue() {
    var valueToDequeue = this.storage[1];
    for (var key = 1; key < this.end; key++) {
      this.storage[key] = this.storage[key + 1];
    }
    if (this.end !== 0) {
      this.end -= 1;
    }
    return valueToDequeue;
  }

  size() {
    return this.end;
  }

}
