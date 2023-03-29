var Stack = function() {
  var instance = {
    'storage': {},
    'topIndex': 0
  };
  return _.extend(instance, stackMethods);
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.topIndex += 1;
  this.storage[this.topIndex] = value;
};

stackMethods.pop = function() {
  var valueToPop = this.storage[this.topIndex];
  delete this.storage[this.topIndex];
  if (this.topIndex !== 0) {
    this.topIndex -= 1;
  }
  return valueToPop;
};

stackMethods.size = function() {
  return this.topIndex;
};