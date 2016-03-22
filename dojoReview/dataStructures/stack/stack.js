var _ = require('underscore')

var Stack = (function() {

  function Stack() {
    this.dataStore = [];
    this.top = -1; //empty stack

    //track miniumum value in stack
    this.min = null;
    this.getMinStack = [];
  };

  Stack.prototype.push = function(data) {
    this.top++;
    this.dataStore[this.top] = data;

    //use another stack to keep track of current minimum value
    if (this.top === 0) {
      this.min = data;
      this.getMinStack[this.top] = data;
    } else if (data < this.min) {
      //update min if data is less
      this.min = data;
      this.getMinStack[this.top] = this.min;
    } else {
      this.getMinStack[this.top] = this.min;
    }
  };
  Stack.prototype.pop = function() {
    if (this.top >= 0) {
      var item = this.dataStore.splice(this.top, 1)

      //update getmin stack
      this.getMinStack.splice(this.top, 1);

      this.top--;
      return item;
    };
  };
  Stack.prototype.display = function() {
    _.each(this.dataStore, function(x) {
       console.log(x)
    });
  };

  Stack.prototype.getMin = function() {
    console.log("the current minimum in the stack is: ", this.min)
  };

  return Stack;
})();


module.exports = Stack;
