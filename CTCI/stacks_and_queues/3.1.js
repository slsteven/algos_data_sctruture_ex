// Describe how you could use a single array to implement three stacks.

//var l = arr.length;
//stack1: [0, l/3];
//stack2: [l/3, 2l/3];
//stack3: [2l/3, l];

function stacks3() {

  this.stacksize = 20;

  this.arr = new Array(this.stacksize * 3);
  var leng = this.arr.length;

  //pointers for top of each stack
  //stacks Numbers: 0, 1, 2
  this.pointers = [ -1, -1, -1]

  this.push = function(stack_num, value) {

    if (this.pointers[stack_num] + 1 >= this.stacksize) {
      return ("no more space");
    } else {
      this.pointers[stack_num]++;
      this.arr[this.top_of_stack(stack_num)] = value;
    }
    return this.arr;
  }

  //delete value and keep index to preserve length
  this.pop = function(stack_num) {
    var val = this.arr[this.top_of_stack(stack_num)];
    delete this.arr[this.top_of_stack(stack_num)]
    this.pointers[stack_num]--;
    return val;
  }

  this.top_of_stack = function(stack_num) {
    return stack_num * this.stacksize + this.pointers[stack_num];
  }

  this.display = function() {
    return this.arr;
  }

  this.peek = function(stack_num) {
    return this.arr[top_of_stack(stack_num)];
  }
}


var r = new stacks3();
