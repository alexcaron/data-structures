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
  var indexToPop = this.topIndex;
  if (indexToPop !== 0) {
    this.topIndex -= 1;
  }
  return this.storage[indexToPop];
};

stackMethods.size = function() {
  return this.topIndex;
};