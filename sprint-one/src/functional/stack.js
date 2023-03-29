var Stack = function() {
  var someInstance = {};

  var storage = {
    'topIndex': 0
  };

  someInstance.push = function(value) {
    storage.topIndex += 1;
    storage[storage.topIndex] = value;
  };

  someInstance.pop = function() {
    var valueToPop = storage[storage.topIndex];
    delete storage[storage.topIndex];
    if (storage.topIndex !== 0) {
      storage.topIndex -= 1;
    }
    return valueToPop;
  };

  someInstance.size = function() {
    return storage.topIndex;
  };

  return someInstance;
};
