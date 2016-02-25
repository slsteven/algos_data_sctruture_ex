var Node = require('./node')

function Singlylist() {
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
  return new_node;
}

module.exports = Singlylist;


