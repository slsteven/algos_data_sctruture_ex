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
ssl.add(18);
ssl.add(3);
// console.log(ssl);
// var result = ssl.removeDups();
// console.log(result);



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

//sum digits
Singlylist.prototype.sumDigits = function(list1, list2){
  if(list1 == null && list2 == null){
    return null;
  }
  var new_res = new Singlylist();
  var list1_current = list1.head;
  var list2_current = list2.head;
  var val1 = 0;
  var val2 = 0;
  var res = 0;
  var remainder = 0;

  while(list1_current != null || list2_current != null){
    if(list1_current != null){
      val1 = list1_current.data;
    }
    if(list2_current != null){
      val2 = list2_current.data;
    }
    var data = (val1 + val2 + remainder) % 10;

    if((val1 + val2) >= 10){
      var remainder = 1;
    } else {
      remainder = 0;
    }
    new_res.add(data);
    list1_current = list1_current.next;
    list2_current = list2_current.next;
  }
  new_res.reverse();

  //==========output comes out in wrong order because of different add methods.
  //used reverse to flip or I can modify add().
  //will attempt with recursion later
  return new_res;
}

var l1 = new Singlylist();
l1.add(7);
l1.add(1);
l1.add(6);

var l2 = new Singlylist();
l2.add(5);
l2.add(9);
l2.add(2);
var result = ssl.sumDigits(l1, l2)
console.log("result", result)

