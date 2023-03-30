var Queue = function() {
  this.storage = {};
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.last += 1;
  this.storage[this.last] = value;
};

Queue.prototype.dequeue = function() {
  var valueToDequeue = this.storage['1'];
  for (var key = 1; key < this.last; key++) {
    this.storage[key] = this.storage[key + 1];
  }
  if (this.last !== 0) {
    this.last -= 1;
  }
  return valueToDequeue;
};

Queue.prototype.size = function() {
  return this.last;
};


