//find substring

var str1 = 'hello world'
var str2 = 'orld'

function findSubstring(str1, str2) {
  var str2Length = str2.length;
  for (var i = 0; i < str1.length; i++) {
    var sub = str1.slice(i, i + str2Length);
    if (sub === str2) {
      return true;
    }
  }
  return false;
};

console.log(findSubstring(str1, str2));
