var Singlylist = require('./sll');
var Node = require('./node');



// Implement an algorithm to find the kth to last element of a singly linked list
//see 2.1.js
//need to re setup files

//find the kth to last element
Singlylist.prototype.findKth = function(k){
  var currentNode = this.head;
  var length = 0;
  if(k === 0 || k < 0 || k > 6){
    return false;
  }
  while(currentNode !== null){
    currentNode = currentNode.next
    length++;
  }
  var find_node = this.head;
  for(var i = 1; i <= length - k; i++){
    find_node = find_node.next;
  }
  return find_node.data;
}

// var result = ssl.findKth(2)
// console.log("result", result)
module.exports = Singlylist;
