var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a var assigned to a new Node(value)
    var newTailNode = Node(value);
    //add var to list.tail node's node.next property
    //if .head & .tail is null just add new
    if (list.head === null & list.tail === null) {
      list.tail = newTailNode;
      list.head = newTailNode;
    } else {
      list.tail.next = newTailNode;
      list.tail = newTailNode;
    }
    //list.tail is now the new var
  };

  list.removeHead = function() {
    //check that head value is not null
    if (list.head !== null) {
      var headValue = list.head.value;
      var nodeToRemove = list.head;
      delete list.head;
      list.head = nodeToRemove.next;
      return headValue;
    }
  };

  list.contains = function(target) {
    var checkNode = function(node, target) {
      if (node.value === target) {
        return true;
      }
      if (node.next !== null) {
        return checkNode(node.next, target);
      } else {
        return false;
      }
    };
    return checkNode(list.head, target);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
