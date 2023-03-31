//Instantiate a new graph
var Graph = function() {
  this.nodeList = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.keys(this.nodeList).includes(node.toString());
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var remove = this.removeEdge.bind(this);
  this.nodeList[node].forEach(function(element) {
    remove(node, element);
  });

  delete this.nodeList[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodeList[fromNode].includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodeList[fromNode].push(toNode);
  this.nodeList[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.nodeList[fromNode] = this.nodeList[fromNode].filter(function(node) {
    return toNode !== node;
  });
  this.nodeList[toNode] = this.nodeList[toNode].filter(function(node) {
    return fromNode !== node;
  });
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodeList) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


