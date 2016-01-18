//SLL and DLL

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



Singlylist.prototype.searchNodeAt = function(position){
  var currentNode = this.head;
  var count = 0;
  if(position > this._length || this._length === 0 || position < 0){
    return false;
  }
  while(currentNode){
    if(count == position){
      return currentNode;
    }
    currentNode = currentNode.next;
    count++;
  }
}




Singlylist.prototype.remove = function(position){
  var currentNode = this.head;
  var count = 0;
  if(position < 0 || position > this._length || this._length === 0){
    return false;
  }
  //position = 1
  if(position === 1){
    this.head = currentNode.next;
    this._length--;
    currentNode = null;
    return currentNode;
  }
  var node_before = null;
  var node_to_delete = null;

  while(count != position){
    node_before = currentNode;
    currentNode = currentNode.next;
    count++;
  }
  node_before.next = currentNode.next;
  node_to_delete = currentNode;
  currentNode = null;
  this._length--;
  return  node_to_delete
}

// ssl.add(100);
// res = ssl.searchNodeAt(2);
// console.log(ssl)
// console.log(res);
// ssl.remove(1);
// console.log(ssl);

//reverse sll

Singlylist.prototype.reverse = function(){
  var currentNode = this.head;
  var next = null;
  var before = null;
  while(currentNode){

    after = currentNode.next;
    currentNode.next = before;

    before = currentNode;
    currentNode = after;
  }
  this.head = before;
}

Singlylist.prototype.insert = function(pos, val){
  var currentNode = this.head;
  var new_node = new Node(val);
  if(this._length < 0 || pos > this._length){
    return false;
  }
  for(var i = 1; i <= pos; i++){
    currentNode = currentNode.next;
  }
  new_node.next = currentNode.next;
  currentNode.next = new_node;
}

Singlylist.prototype.display = function(){
  console.log(this);
}

var sll = new Singlylist();
sll.add(10);
sll.display();
