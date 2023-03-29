var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {
    'lastIndex': 0
  };

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage.lastIndex++;
    storage[storage.lastIndex] = value;
  };

  someInstance.dequeue = function() {
    var valueToDequeue = storage['1'];
    delete storage['1'];
    for (var key = 1; key < storage.lastIndex; key++) {
      storage[key] = storage[key + 1];
    }
    delete storage[storage.lastIndex];
    if (storage.lastIndex !== 0) {
      storage.lastIndex -= 1;
    }
    return valueToDequeue;
  };

  someInstance.size = function() {
    return storage.lastIndex;
  };

  return someInstance;
};
