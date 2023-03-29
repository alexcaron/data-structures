var Stack = function() {
  var instance = {
    'storage': {},
    'topIndex': 0
  };
  return _.extend(instance, stackMethods);
};

var push = function(value) {
  this.topIndex += 1;
  this.storage[this.topIndex] = value;
};

var pop = function() {
  var indexToPop = this.topIndex;
  if (indexToPop !== 0) {
    this.topIndex -= 1;
  }
  return this.storage[indexToPop];
};

var size = function() {
  return this.topIndex;
};

var stackMethods = {
  'push': push,
  'pop': pop,
  'size': size
};