// var Singlylist = require('./sll');
// var Node = require('./node');
var X = require('./2.1')
require('./2.2')
require('./2.4')
console.log(X)

var ssl = new X();
console.log(ssl.__proto__)


ssl.add(5);
ssl.add(19);
ssl.add(11);
ssl.add(19);
ssl.add(5);
ssl.add(4);

