var Stack = function() {
  this.storage = {};
  this.topIndex = 0;
};

Stack.prototype.push = function(value) {
  this.topIndex += 1;
  this.storage[this.topIndex] = value;
};

Stack.prototype.pop = function() {
  var topValue = this.storage[this.topIndex];
  delete this.storage[this.topIndex];
  if (this.topIndex !== 0) {
    this.topIndex -= 1;
  }
  return topValue;
};

Stack.prototype.size = function() {
  return this.topIndex;
};



