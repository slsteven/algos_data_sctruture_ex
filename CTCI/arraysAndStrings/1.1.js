//Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?


//O(n)
var str = "asdf";

function isUnique(str){
  var letter;
  var hash = {};
  for(var i = 0; i < str.length; i++){
    letter = str.charCodeAt(i);
    if(hash[letter]){
      return false;
    } else {
      hash[letter] = true;
    };
  };
  return true;
};

var result = isUnique(str);
console.log(result);
