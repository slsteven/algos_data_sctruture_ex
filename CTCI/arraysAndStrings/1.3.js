//Given two strings, write a method to decide if one is a permutation of the other.

var str1 = "doga";
var str2 = "odgd";

function checkPermutation(str1, str2){
  if(str1.length !== str2.length){
    return false;
  }
  var sorted1 = str1.split("").sort().join("");
  var sorted2 = str2.split("").sort().join("");

  for(var i = 0; i < str1.length; i++){
    if(sorted1[i] !== sorted2[i]){
      return false;
    }
  }
  return true;
}

var result = checkPermutation(str1, str2);
console.log(result);
