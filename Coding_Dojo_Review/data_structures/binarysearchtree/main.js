var BinarySearchTree = require('./bst');

var bst = new BinarySearchTree();

bst.insert(6)
bst.insert(2)
bst.insert(8)
bst.insert(1)

bst.insert(4)
bst.insert(3)



//console.log(bst.root);
// bst.insert(23);
// bst.insert(45);
// bst.insert(16);
// bst.insert(37);
// bst.insert(3);
// bst.insert(99);
// bst.insert(22);
// bst.insert(38);
// bst.insert(2);

// console.log("\n\nIN ORDER");
// console.log(bst.inOrder(bst.root));
// console.log("\n\nPRE ORDER");
// bst.preOrder(bst.root);
// console.log("\n\nPOST ORDER");
// bst.postOrder(bst.root);
// console.log("\n\nMINIMUM VALUE");
// console.log(bst.getMin());
// console.log("\n\nMAXIMUM VALUE");
// console.log(bst.getMax());
// console.log("\n\nFind node with data 3");
// console.log(bst.find(22));

//result = bst.delete(45);
//console.log("DELETE RESULT", result)


console.log(bst.levelOrder(bst.root));

