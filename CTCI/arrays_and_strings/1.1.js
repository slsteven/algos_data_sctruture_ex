//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


//O(n)
var str = "asdf";

function isUnique(str){
  var letter;
  var arr = [];
  for(var i = 0; i < str.length; i++){
    letter = str.charCodeAt(i);
    console.log(letter);
    if(arr[letter]){
      return false;
    } else {
      arr[letter] = true;
    }
  }
   return true;
}

var result = isUnique(str);
console.log(result);
