var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit); // get, set, each
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  var touple = [k, v];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    }
  }
  bucket.push(touple);
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  bucket = bucket.filter(function(tuple) {
    return tuple[0] !== k;
  });
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


