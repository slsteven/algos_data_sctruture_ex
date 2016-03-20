// Given a sorted (increasing order) array with unique integer elements, write an
// algorithm to create a binary search tree with minimal height.
var Node = require('../../Coding_Dojo_Review/data_structures/binarysearchtree/node');


//set middle index as the root node, and use left half as left subtree and right half as right subtree
//use subtree middle index as another root node for each side
function createBST(arr, start, end) {
  if (end < start) {
    return null;
  }
  var middle = Math.floor(start + end)/2;
  // console.log("middle index", middle)

  //create new node with middle index
  var node = new Node(arr[middle]);

  //assign left pointer to middle index of left subtree
  node.left = createBST(arr, start, middle - 1);
  //assign right pointer to middle index of right subtree
  node.right = createBST(arr, middle + 1, end);

  return node;
};

var input = [1, 3, 4, 7, 9, 10, 11];

//arguments: array, start index, end index
var tree = createBST(input, 0, input.length - 1);

//use in order traversal
function checkIfBst(node, result) {
  if (node === null) {
    return;
  };

  var currentNode = node;
  if (currentNode.left !== null) {
    checkIfBst(currentNode.left, result);
  };
  console.log(currentNode.data);
  result.push(currentNode.data);
  if (currentNode.right !== null) {
    checkIfBst(currentNode.right, result);
  };
  return result
};

var res = checkIfBst(tree, []);
console.log(res);
