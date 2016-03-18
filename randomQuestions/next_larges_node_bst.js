// find the next largest node in BST

// Our node has a right child – In this case find the smallest node in that subtree
// Our node does not have a right child – In this case go upward to search for a parent whose value is bigger

//assume we have a link to the parent

function next_largest(node){
  var currentNode = node;
  //check for right subtree, return min in that tree
  if(currentNode.right){
    currentNode = currentNode.right;
    while(currentNode.left != null){
      currentNode = currentNode.left;
    }
    return currentNode;
  }
  if(currentNode.parent == null){
    return false;
  }
  //has no right subtree, go upwards
  while(currentNode.parent){
    if(currentNode.parent.left == currentNode){
      return currentNode.parent
    } else {
      currentNode = currentNode.parent;
    }
  }
}
