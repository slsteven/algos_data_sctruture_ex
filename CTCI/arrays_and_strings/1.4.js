// Write a method to replace all spaces in a string with'%20'. You may assume that
// the string has sufficient space at the end of the string to hold the additional
// characters, and that you are given the "true" length of the string. (Note: if implementing
// in Java, please use a character array so that you can perform this operation
// in place.)
// EXAMPLE
// Input: "Mr John Smith
// Output: "Mr%20Dohn%20Smith"

var str = "Mr John Smith    ";

function strReplace(str){
  var len = str.length;
  for(var i = 0; i < str.length; i++){
    if(str[i] == " "){
      // console.log("PART 1", str.substring(0, i))
      // console.log("PART 2", str.substring(i+1, str.length-2))
      str = str.substring(0, i).concat("%20").concat(str.substring(i+1, str.length-2));
    }
  }
  return str;
}

console.log(strReplace(str))
