var Stack = require('./stack')
var stack = new Stack();
stack.push(3);
stack.push(4);
stack.push(1);
stack.pop();
stack.push(-2)
stack.display();
stack.getMin();
