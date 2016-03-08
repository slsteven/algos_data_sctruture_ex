var Singlylist = require('./sll');
var Node = require('./node');

// Write code to remove duplicates from an unsorted linked list.
Singlylist.prototype.removeDups = function(){
  var currentNode = this.head;
  var prev_node = null;
  var my_hash = {};
  if(currentNode == null){
    return false;
  }
  while(currentNode !== null){
    //data already saved
    if(my_hash[currentNode.data] == null){
      my_hash[currentNode.data] = currentNode.next;
      prev_node = currentNode;
    } else {    //not empty
      prev_node.next = currentNode.next;
    }
    currentNode = currentNode.next;
  }
  return my_hash;
}


//remove node
Singlylist.prototype.remove = function(data){
  var currentNode = this.head;
  var prev_node = null;
  var node_to_delete = null;
  if(data == this.head.data){
    this.head = currentNode.next;
    return this.head;
  }
  while(currentNode.data !== data){
    prev_node = currentNode;
    currentNode = currentNode.next;
  }
  node_to_delete = currentNode;
  prev_node.next = node_to_delete.next
  currentNode = null;
  return this.head
}
// var result = ssl.remove(11)
// console.log("result", result)


Singlylist.prototype.reverse = function(){
  var currentNode = this.head;
  var next = null;
  var before = null;
  while(currentNode){

    next = currentNode.next;
    currentNode.next = before;

    before = currentNode;
    currentNode = after;
  }
  this.head = before;
}



//can use reverse also
Singlylist.prototype.palindrome = function(){
  var arr = [];
  var currentNode = this.head;
  while(currentNode != null){
    arr.push(currentNode.data);
    currentNode = currentNode.next;
  }
  var index = 0;
  var leng = arr.length-1;
  while(index <= arr.length/2){
    if(arr[index] == arr[leng]){
      index++;
      leng--;
    } else {
      return false;
    }
  }
  return true;
}

module.exports = Singlylist;
