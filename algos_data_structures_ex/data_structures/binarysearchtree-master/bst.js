var Node = require('./node');

var BST = (function(){
  function BST() {
    this.root = null;
  };

  BST.prototype.insert = function(data) {
      var new_node = new Node(data, null, null);
      var currentNode = this.root;
      var check = true;
      if(this.root == null){
        this.root = new_node;
        return this;
      }
      while(check){
        if(new_node.data < currentNode.data){
          if(currentNode.left == null){
            currentNode.left = new_node;
            check = false;
          }
          else {
            currentNode = currentNode.left;
          }        }
        if(new_node.data > currentNode.data){
          if(currentNode.right == null){
            currentNode.right = new_node;
            check = false;
          }
          else {
          currentNode = currentNode.right;
          }
        }
      }
      return false;
  };
  //left, root, right
  BST.prototype.inOrder = function(node) {
    var result = [];
    var traverse = function(node){
      if(node == null){
        return;
      }
      if(node.left !== null){
        traverse(node.left);
      }
      result.push(node.data);

      if(node.right !== null){
        traverse(node.right);
      }
    }
    traverse(node);
    console.log(result);
  };

  BST.prototype.preOrder = function(node) {
    var result = [];
    var traverse = function(node){
      if(node == null){
        return;
      }
      result.push(node.data);
      if(node.left !== null){
        traverse(node.left);
      }
      if(node.right !== null){
        traverse(node.right);
      }
    }
    traverse(node);
    console.log(result);
  };

  BST.prototype.postOrder = function(node) {
    var result = [];
    var traverse = function(node){
      if(node == null){
        return;
      }
      if(node.left !== null){
        traverse(node.left);
      }
      if(node.right !== null){
        traverse(node.right);
      }
      result.push(node.data);

    }
    traverse(node);
    console.log(result);
  };


  return BST;
})();

module.exports = BST;











