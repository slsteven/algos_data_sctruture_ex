// Write code to remove duplicates from an unsorted linked list.

function Node(data){
  this.data = data;
  this.next = null;
}

function Singlylist(){
  this._length = 0;
  this.head = null;
}

Singlylist.prototype.add = function(value){
  var new_node = new Node(value);
  var currentNode = this.head;
  //if list is empty
  if(!currentNode){
    this.head = new_node;
    this._length++;
    return new_node;
  }
  //a non empty list
  if(currentNode){
    while(currentNode.next != null){
      currentNode = currentNode.next;
    }
    currentNode.next = new_node;
    this._length++;
    return new_node;
  }
}
Singlylist.prototype.removeDups = function(){
  var count = 0;
  var currentNode = this.head;
  var prev_node = null;
  var my_hash = {};
  if(currentNode == null){
    return false;
  }
  while(currentNode !== null){
    //data already saved
    // console.log(my_hash, currentNode.data)
    if(my_hash[currentNode.data] == null){
      my_hash[currentNode.data] = currentNode.next;
      prev_node = currentNode;
    } else {    //not empty
      prev_node.next = currentNode.next;
    }
    // console.log("LOOP", my_hash, currentNode.data, prev_node.data)
    currentNode = currentNode.next;
  }
  return my_hash;
}


var ssl = new Singlylist();
ssl.add(5);
ssl.add(19);
ssl.add(11);
ssl.add(4);
ssl.add(19);
ssl.add(3);
// console.log(ssl);

var result = ssl.removeDups();
console.log(result);
