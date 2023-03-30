var Queue = function() {
  var instance = {};
  instance.storage = {};
  instance.last = 0;
  return _.extend(instance, queueMethods);
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.last += 1;
  this.storage[this.last] = value;
};

queueMethods.dequeue = function() {
  var valueToDequeue = this.storage['1'];
  for (var key = 1; key < this.last; key++) {
    this.storage[key] = this.storage[key + 1];
  }
  delete this.storage[this.last];
  if (this.last !== 0) {
    this.last -= 1;
  }
  return valueToDequeue;
};

queueMethods.size = function() {
  return this.last;
};

