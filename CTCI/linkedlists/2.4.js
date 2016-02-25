var Singlylist = require('./sll');
var Node = require('./node');


// Write code to partition a linked list around a value x, such that all nodes less than
// x come before all nodes greater than or equal to x.
Singlylist.prototype.partition = function(data){
  var left = new Singlylist();
  var left_current = left.head;
  var left_end = null;
  var right = new Singlylist();
  var right_current = right.head;
  var currentNode = this.head;

  while(currentNode !== null){
    if(currentNode.data < data){
      if(left_current == null){
        left_current = currentNode;
        left_end = left_current;
      } else {
        //set left_end.next to current so it doesnt skips if check
        left_end.next = currentNode;
        left_end = currentNode
        }
    } else {
      if(right_current == null){
        right_current = currentNode;
        right_end = right_current;
      } else {
        right_end.next = currentNode
        right_end = currentNode;
        }
      }
    currentNode = currentNode.next;
  }
  left_end.next = right_current;
 return left_current;
}

// var result = ssl.partition(11)
// console.log("result", result)
module.exports = Singlylist;
