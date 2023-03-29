var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.topIndex = 0;
  console.log(instance.topIndex);
  return instance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.topIndex += 1;
  this.storage[this.topIndex] = value;
};

stackMethods.pop = function() {
  var indexToPop = this.topIndex;
  if (indexToPop !== 0) {
    this.topIndex -= 1;
  }
  return this.storage[indexToPop];
};

stackMethods.size = function() {
  return this.topIndex;
};

