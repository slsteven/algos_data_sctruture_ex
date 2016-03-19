var Node = require('./node');
var Queue = require('../../../tutsplus_javascript/operations_of_stack');

var BST = (function(){
  function BST() {
    this.root = null;
  };


  //Binary search tree: for all nodes, the left children are less than or equal to the current node which is less than the right nodes

  //Insert method: compare data with root data. Move left if less than, move right if greater than
  //
  BST.prototype.insert = function(data) {
    var newNode = new Node(data, null, null);
    var currentNode = this.root;
    //if BST root is null, add the first node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    traverse(currentNode);

    function traverse(node) {
      //compare data with root. If less than, go left
      if (data < node.data) {
        //check if left is null
        if (node.left === null) {
          //insert node
          node.left = newNode;
          return;
        } else {
          //move left to next node
          traverse(node.left);
        };
      } else if (data > node.data) {
        //go right
        if (node.right === null) {
          node.right = newNode;
          return;
        } else {
          traverse(node.right);
        };
      };
    };
  };
  // Binary tree traversal: Preorder, Inorder, Postorder
  // Time complexity: O(n)
  // Space complexity: O(n)
  // worst case: O(n)
  // best/average case: O(log n)

  //left, root, right
  BST.prototype.inOrder = function(node) {
    var currentNode = node;
    if (node === null) {
      return this;
    }
    //move as far left as possible. check left for null.
    if (currentNode.left !== null) {
      //continue left by recusive function
      inOrder(currentNode.left);
    }
    console.log(currentNode.data);

    if (currentNode.right !== null) {
      //continue left by recusive function
      inOrder(currentNode.right);
    };
  };
  //root, left , right
  BST.prototype.preOrder = function(node) {
    var currentNode = node;
    if (node === null) {
      return this;
    }
    console.log(currentNode.data);
    //move as far left as possible. check left for null.
    if (currentNode.left !== null) {
      //continue left by recusive function
      preOrder(currentNode.left);
    };

    if (currentNode.right !== null) {
      //continue left by recusive function
      preOrder(currentNode.right);
    };

  };

  BST.prototype.postOrder = function(node) {
    var currentNode = node;
    if (node === null) {
      return this;
    }
    //move as far left as possible. check left for null.
    if (currentNode.left !== null) {
      //continue left by recusive function
      postOrder(currentNode.left);
    };

    if (currentNode.right !== null) {
      //continue left by recusive function
      postOrder(currentNode.right);
    };
    console.log(currentNode.data);
  };

  //use a queue and find adacent nodes
  //require queue module so we dont have to create our own
  BST.prototype.levelOrder = function(node) {
    var currentNode = node;
    var queue = new Queue();
    if (node === null) {
      return;
    };
    //add root node to queue
    queue.enqueue(currentNode);

    //while there is at least one discovered node in queue, visist that node, check children and add them to queue, dequeue visisted node
    while(queue._oldestIndex !== queue._newestIndex) {
      currentNode = queue._storage[queue._oldestIndex];
      if (currentNode.left !== null) {
        queue.enqueue(currentNode.left);
      };
      if (currentNode.right !== null) {
        queue.enqueue(currentNode.right);
      };
      console.log(currentNode.data);
      queue.dequeue();
    };
    return this;
  };

  BST.prototype.getMin = function() {
    var currentNode = this.root;
    // console.log(currentNode.left)
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  BST.prototype.getMax = function() {
    var currentNode = this.root;
    // console.log(currentNode.right)
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  BST.prototype.find = function(data) {
    var currentNode = this.root;
    while(currentNode.data !== data){
      if(data < currentNode.data){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if(currentNode == null){
        return null;
      }
    }
    return currentNode;
  }

  //case 1: no child
  //case 2: one child
  //case 3: two children

  //(3) find min in right subtree => copy val in target node, delete duplicate
  //(3) find max in left subtree => copy val in target node, delete duplicate
  BST.prototype.delete = function(data){
    console.log(this.root)
    var currentNode = this.root;
    var parent = null;
    var min = null;
    var max = null;
    // traverse tree to find data
    while(currentNode != null){
      if(currentNode.data === data){
        break;
      }
      parent = currentNode;
      if(data < currentNode.data){
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
      if(currentNode === null){
        return null;
      }
    }
        // console.log("CURREENT", currentNode.data)
    //case1: leaf node
    if(currentNode.left === null && currentNode.right === null){
      if(currentNode.data < parent.data){
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //case 2: one child
    if(currentNode.right !== null || currentNode.left !== null){
      if(parent == null){
        if(currentNode.left != null){
          return currentNode.left;
        } else {
          return currentNode.right;
        }
      }
      if(currentNode == parent.right){
        parent.right = currentNode.left != null ? currentNode.left : currentNode.right;
      } else {
        parent.left = currentNode.left != null ? currentNode.left : currentNode.right;
      }
    }
    //case 3: two children
    if(currentNode.left && currentNode.right){
     console.log("two children current node:", currentNode, "parent:", parent)
      // max = currentNode.left.findMax();
      // console.log("MAX", max);
      ///===============
    }
    return this.root;
  }


  return BST;
})();

module.exports = BST;
