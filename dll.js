//doubly linked list

function Node(value){
  this.data = value;
  this.next = null;
  this.previous = null;
}

function DoublyList(){
  this._length = 0;
  this.head = null;
  this.tail = null;
}


DoublyList.prototype.add = function(value){
  var currentNode = this.head;
  var new_node = new Node(value);
  //if empty list
  if(!currentNode){
    this.head = new_node;
    this.tail = new_node;
  }

  //if not empty just use tail to add to end
  if(currentNode){
    this.tail.next = new_node;
    new_node.previous = this.tail;
    this.tail = new_node;
  }
  this._length++;
  return new_node;
}

DoublyList.prototype.remove = function(position){
  var currentNode = this.head;
  var currentNode2 = this.tail;
  var before_node = null;
  var after_node = null;
  var node_to_delete = null;
  var count = 1;

  if(this._length === 0 || position < 1 || position > this._length){
    return false;
  }
  //if only 1 node
  if(position === 1 && this._length === 1){
    this.head = null;
    this.taill = null;
  }
  if(position === 1){
    this.head = currentNode.next;
    this.head.previous = null;
  }
  //last node
  else if(position == this._length){
    this.tail = currentNode2.previous;
    this.tail.next = null;
  }
  //middle node
  else{
    while(count < position){
      currentNode = currentNode.next;
      count++;
    }
    before_node = currentNode.previous;
    after_node = currentNode.next;
    node_to_delete = currentNode;
    before_node.next = after_node;
    after_node.previous = before_node

    currentNode = null;

    }
  this._length--;
  return node_to_delete;
  }

dll = new DoublyList();
dll.add(10);
dll.add(20);
dll.add(30);
 x = dll.remove(2);
console.log(dll);
