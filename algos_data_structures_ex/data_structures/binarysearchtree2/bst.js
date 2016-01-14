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
    return currentNode.data;
  }

  BST.prototype.getMax = function() {
    var currentNode = this.root;
    console.log(currentNode.right)
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
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


  return BST;
})();

module.exports = BST;
