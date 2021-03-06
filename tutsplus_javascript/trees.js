var Queue = require('./operations_of_stack')

//trees
//Depth-First Search (DFS) uses stack
//Breadth-First Search (BFS) uses queue

function Node(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data){
  var new_node = new Node(data);
  this._root = new_node;
}


Tree.prototype.traverseDF = function(callback){
  //recursive function immediately invoked
  (function recurse(currentNode){
    //step 2
    for(var i = 0, length = currentNode.children.length; i < length; i++){
      //step 3
      recurse(currentNode.children[i]);
    }
    //step 4
    callback(currentNode);

  })(this._root);
};

Tree.prototype.traverseBF = function(callback){
  //create instance of Queue;
  var queue = new Queue();
  //add node that invoked traverseBF(callback) to instance of Queue
  queue.enqueue(this._root);
  currentTree = queue.dequeue();

  while(currentTree){
    for(var  i = 0, length = currentTree.children.length; i < length; i++){
      queue.enqueue(currentTree.children[i]);
    }
    callback(currentTree);
    currentTree = queue.dequeue();
  }
};


Tree.prototype.contains = function(callback, traversal) {
    traversal.call(this, callback);
};

Tree.prototype.add = function(data, toData, traversal) {
    var child = new Node(data),
        parent = null,
        callback = function(node) {
            if (node.data === toData) {
                parent = node;
            }
        };

    this.contains(callback, traversal);

    if (parent) {
        parent.children.push(child);
        child.parent = parent;
    } else {
        throw new Error('Cannot add node to a non-existent parent.');
    }
};

var tree = new Tree('A');
console.log(tree);
tree._root.children.push(new Node('B'));
tree._root.children[0].parent = tree;

tree._root.children.push(new Node('C'));
tree._root.children[1].parent = tree;

tree._root.children.push(new Node('four'));
tree._root.children[2].parent = tree;

tree._root.children[0].children.push(new Node('five'));
tree._root.children[0].children[0].parent = tree._root.children[0];

tree._root.children[0].children.push(new Node('six'));
tree._root.children[0].children[1].parent = tree._root.children[0];

tree._root.children[2].children.push(new Node('seven'));
tree._root.children[2].children[0].parent = tree._root.children[2];
console.log(tree._root)
tree.traverseBF

(function(node){
  console.log(node.data);
})
