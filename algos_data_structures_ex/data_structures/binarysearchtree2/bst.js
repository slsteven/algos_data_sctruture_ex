var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
    var node = new Node(data, null, null);
    if(this.root === null) {
      this.root = node;
    } else {
      var current = this.root;
      while (true) {
        var ancestor = current;
        if (data < current.data) {
          current = current.left;
          if (current === null) {
            ancestor.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current === null) {
            ancestor.right = node;
            break;
          }
        }
      }
    }
  };

  BST.prototype.inOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.inOrder(node.left);
      console.log(node.show() + " ");
      this.inOrder(node.right);
    }
  };

  BST.prototype.preOrder = function(node) {
    if (node === null) {
      return;
    } else {
      console.log(node.show() + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  };

  BST.prototype.postOrder = function(node) {
    if (node === null) {
      return;
    } else {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.show() + " ");
    }
  };

  //could solve recursively if getMin accepts an argument
  BST.prototype.getMin = function() {
    var currentNode = this.root;
    console.log(currentNode.left)
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  BST.prototype.getMax = function() {
    var currentNode = this.root;
    console.log(currentNode.right)
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
  BST.prototype.delete = function(node, data){
    var currentNode = node.root;
    var parent = null;
    var min = null;
    var max = null;

    while(currentNode.data !== data){
      if(currentNode.data < data){
        parent = currentNode;
        currentNode = currentNode.left;
      } else {
        parent = currentNode;
        currentNode = currentNode.right;
      }
      if(currentNode === null){
        return null;
      }
    }

    if(currentNode.left === null && currentNode.right === null){
      if(currentNode.data < parent.data){
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
    //case 2: one child - left
    if(currentNode.left && (currentNode.right === null)){
      parent.left = currentNode.left;
    }

    //case 2: one child - right
    if(currentNode.right && (currentNode.left === null)){
        parent.right = currentNode.right;
      }
    //case 3: two children
    if(currentNode.left && currentNode.right){
      max = currentNode.left.findMax();
      console.log(max);
      ///===============

    }
  }


  return BST;
})();

module.exports = BST;
