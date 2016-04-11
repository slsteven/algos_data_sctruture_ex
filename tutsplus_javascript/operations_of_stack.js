//Stacks (LIFO)
// O(1) runtime = contant time
function Stack(){
  this._size = 0;
  this._storage = {};
  this.min_storage = {};
  this.min;
};

//defining methods for push, pop
Stack.prototype.push = function(data){
  //incrases size of storage
  var size = this._size++;

  //assigns size as key and data as value
  this._storage[size] = data;

  //set min to the first added element
  if(this._size === 1) {
    this.min = data;
    this.min_storage[data] = data;
  } else {
    if(data < this.min) {
      this.min = data;
    };
    this.min_storage[data] = data;
  };
};

//use stacks current size to get last added data
//delete most recent data and decrement size
Stack.prototype.pop = function(){
  //decrease size of storage
  var size = this._size;
  var data_to_delete;
  if (size > 0) {

    data_to_delete = this._storage[size - 1];

    if (data_to_delete == this.min) {
      delete this.min_storage[this.min];
      for (first in this.min_storage) {
        this.min = first;
        break;
      };
    };

    delete this._storage[size-1];
    this._size--;

    return data_to_delete;
  };
};

Stack.prototype.empty = function() {
  if (this._size > 0) {
    return false;
  } else {
    return true;
  };
};

Stack.prototype.display = function() {
};

Stack.prototype.min = function() {

};

var stack = new Stack();
stack.push(5);
stack.push(6);
stack.push(1);


function Queue(){
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};
};

Queue.prototype.size = function(){
  return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data){
  //queue is empty
  if (this._oldestIndex === this._newestIndex) {
    this._storage[this._oldestIndex] = data;
    this._newestIndex++;
  } else {
    this._storage[this._newestIndex] = data;
    this._newestIndex++;
  };
};

Queue.prototype.dequeue = function(){
  var dequeuedVal;
  if (this._oldestIndex === this._newestIndex) {
    return 'empty';
  } else {
    dequeuedVal = this._storage[this._oldestIndex];
    delete this._storage[this._oldestIndex];
    this._oldestIndex++;
  };
  return dequeuedVal;
};

Queue.prototype.display = function(){

}

myque = new Queue();
myque.enqueue(10);
myque.enqueue(20);
myque.enqueue(4);
console.log(myque.dequeue());
console.log(myque);


module.exports = Queue;
