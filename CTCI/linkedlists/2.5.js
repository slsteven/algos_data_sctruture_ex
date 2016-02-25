var Singlylist = require('./sll');
var Node = require('./node');

// You have two numbers represented by a linked list, where each node contains a
// single digit. The digits are stored in reverse order, such that the Ts digit is at the
// head of the list. Write a function that adds the two numbers and returns the sum
// as a linked list.
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is, 617 + 295.
// Output: 2 -> 1 -> 9.That is, 912.
// FOLLOW UP
// Suppose the digits are stored in forward order. Repeat the above problem.
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5).That is, 617 + 295.
// Output: 9 -> 1 -> 2.That is, 912.


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

// var l1 = new Singlylist();
// l1.add(7);
// l1.add(1);
// l1.add(6);

// var l2 = new Singlylist();
// l2.add(5);
// l2.add(9);
// l2.add(2);
// var result = ssl.sumDigits(l1, l2)
// console.log("result", result)
