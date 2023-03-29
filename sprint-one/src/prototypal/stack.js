var Stack = function() {
  var instance = Object.create(Stack.prototype);
  instance.storage = {};
  instance.topIndex = 0;
  return instance;
};

Stack.prototype.push = function(value) {
  this.topIndex += 1;
  this.storage[topIndex] = value;
};

Stack.prototype.pop = function() {
  var indexToPop = this.topIndex;
  if (indexToPop !== 0) {
    this.topIndex -= 1;
  }
  return this.storage[indexToPop];
};

Stack.prototype.size = function() {
  return this.topIndex;
};

