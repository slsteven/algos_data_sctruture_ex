 // Implement a MyQueue class which implements a queue using two stacks.
var Stack = require('../../tutsplus_javascript/operations_of_stack')

function Myqueue() {
  this.oldstack = new Stack();
  this.newstack = new Stack();
  this.storage = {};
}


Myqueue.prototype.add = function(data) {
  this.newstack.push(data);
}

Myqueue.prototype.shiftStacks = function() {
  if (this.oldstack.empty()) {
    while (!this.newstack.empty()) {
      this.oldstack.push(this.newstack.pop())
    }
  }
}

Myqueue.prototype.remove = function() {
  this.shiftStacks();
  this.oldstack.pop();
  return this;
}

var myq = new Myqueue();
myq.add(19);
console.log(myq.remove());
