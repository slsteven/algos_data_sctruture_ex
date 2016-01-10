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

var my_tree = new Tree("CEO");
console.log(my_tree)

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
