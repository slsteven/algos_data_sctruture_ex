//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


//O(n)
var str = "this ia string";

function isUnique(str){
  var letter;
  var hash = {};
  for(var i = 0; i < str.length; i++){
    letter = str.charCodeAt(i);
    console.log(letter);
    if(hash[letter]){
      return false;
    } else {
      hash[letter] = true;
    }
  }
   return true;
}

var result = isUnique(str);
console.log(result);
