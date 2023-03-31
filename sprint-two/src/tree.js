var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else {
    var found = false;
    for (var i = 0; i < this.children.length; i++) {
      found = this.children[i].contains(target);
      if (found) {
        return true;
      }
    }
  }
  return false;
};