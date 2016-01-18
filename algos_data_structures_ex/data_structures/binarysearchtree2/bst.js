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
