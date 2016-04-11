//find the first NON repeating letter

var input = "teeters"

function firstNonRepeating(str) {
  var hash = {};
  var leng = str.length;
  for(var i = 0; i < leng; i++) {
    if (hash[str[i]] == undefined) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]]++;
    }
  };
  for(var j = 0; j < leng; j++) {
    if (hash[str[j]] === 1) {
      return str[j]
    };
  };
  return false;
};

console.log(firstNonRepeating(input));
