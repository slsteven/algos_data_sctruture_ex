//Stacks (LIFO)
// O(1) runtime = contant time


function Stack(){
  this._size = 0;
  this._storage = {};
};

//defining methods for push, pop
Stack.prototype.push = function(data){
  //incrases size of storage
  var size = this._size++;

  //assigns size as key and data as value
  this._storage[size] = data;
};

//use stacks current size to get last added data
//delete most recent data
//decrement size
Stack.prototype.pop = function(){
  //decrease size of storage
  var size = this._size;
  var data_to_delete;

  if(size > 0){
    data_to_delete = this._storage[size];

    delete this._storage[size];
    this._size--;

    return data_to_delete
  }
};

Stack.prototype.display = function(){
  console.log(this);
}


var stack = new Stack();
stack.push("Bulbasaur");
stack.push("Charmander");
stack.push("Squirtle");
stack.display();
console.log("Taking out Squirtle");
stack.pop();
stack.display();
console.log("Adding Pikachu");
stack.push("Pikachu");
stack.display();


function Queue(){
  this._oldestIndex = 1;
  this._newestIndex = 1;
  this._storage = {};
};

Queue.prototype.size = function(){
  return this._newestIndex - this._oldestIndex;
};

Queue.prototype.enqueue = function(data){
  this._storage[this._newestIndex] = data;
  this._newestIndex++;
};
//remove
Queue.prototype.dequeue = function(data){
  if(this._oldestIndex !== this._newestIndex){
    var oldestIndex = this._oldestIndex;
    var data_to_delete = this._storage[oldestIndex];
    delete this._storage[oldestIndex];
    this._oldestIndex++;

    return data_to_delete;
  }
};

Queue.prototype.display = function(){

}

myque = new Queue();
myque.enqueue(10);
console.log(myque);
myque.dequeue(10);
console.log(myque);
