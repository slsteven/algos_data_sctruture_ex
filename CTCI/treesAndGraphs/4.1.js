// Implement a function to check if a binary tree is balanced. For the purposes of
// this question, a balanced tree is defined to be a tree such that the heights of the
// two subtrees of any node never differ by more than one

//height of empty tree = -1
//height of tree with root node = 0
//diff = | height1 - height2 |

var BST = require('../../Coding_Dojo_Review/data_structures/binarysearchtree/bst');

var bst = new BST();
bst.insert(6)
bst.insert(2)
bst.insert(8)
// bst.insert(1)
// bst.insert(4)
// bst.insert(3)

//Start with root node, count number of edges in longest path from root to leaf node
//calculate difference
//move to next node and repeat

function findHeight(node) {

  var currentNode = node;
  var numberOfEdges = 0;

  if (currentNode === null) {
    return -1;
  };
  var leftHeight = findHeight(currentNode.left);
  var rightHeight = findHeight(currentNode.right);
  console.log(leftHeight, rightHeight)
  console.log(leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1)
  return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
};

console.log(findHeight(bst.root));
