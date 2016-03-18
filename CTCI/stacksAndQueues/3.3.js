// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOf Stacks that mimics
// this. SetOf Stacks should be composed of several stacks and should create a
// new stack once the previous one exceeds capacity. SetOf Stacks. push() and
// SetOf Stacks. pop() should behave identically to a single stack (that is, popO
// should return the same values as it would if there were just a single stack).

//unfinished

function SetOfStacks(){
  this._size = 0;
  this._storage = {};
  this.min_storage = {};
  this.min;
  this.next = null;
};

//defining methods for push, pop
SetOfStacks.prototype.push = function(data){
  //incrases size of storage
  var size = this._size++;


  //create new stack if stack gets too high
  if (!this.isFull()) {
    //assigns size as key and data as value
    this._storage[size] = data;
  } else {
    var new_stack = new SetOfStacks();
    this.next = new_stack;
    new_stack.push()
  }


  //set min to the first added element
  if(this._size === 1) {
    this.min = data;
    this.min_storage[data] = data;
  } else {

      if(data < this.min) {
        this.min = data;
      }

    this.min_storage[data] = data;
  }
};


SetOfStacks.prototype.isFull = function() {
  if (this._size  === 3) {
    return true;
  } else {
    return false;
  }
}

//use stacks current size to get last added data
//delete most recent data
//decrement size
SetOfStacks.prototype.pop = function(){
  //decrease size of storage
  var size = this._size;
  var data_to_delete;
  console.log(size);
  if (size > 0) {

    data_to_delete = this._storage[size - 1];

    if (data_to_delete == this.min) {
      delete this.min_storage[this.min];
      for (first in this.min_storage) {
        this.min = first;
        break;
      }
    }

    delete this._storage[size-1];
    this._size--;

    return data_to_delete
  }
};

SetOfStacks.prototype.display = function() {
  console.log(this);
}

SetOfStacks.prototype.min = function() {

}

var stack = new SetOfStacks();
stack.push(5);
stack.push(6);
//stack.push(1);
//stack.push(4);
console.log(stack)
