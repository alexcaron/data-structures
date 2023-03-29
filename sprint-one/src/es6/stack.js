class Stack {
  constructor() {
    this.storage = {};
    this.topIndex = 0;
  }

  push(value) {
    this.topIndex += 1;
    this.storage[this.topIndex] = value;
  }

  pop() {
    var topValue = this.storage[this.topIndex];
    if (this.topIndex !== 0) {
      this.topIndex -= 1;
    }
    return topValue;
  }

  size() {
    return this.topIndex;
  }
}