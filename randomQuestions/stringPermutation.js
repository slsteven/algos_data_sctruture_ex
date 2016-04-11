var results = {};

function perm(str, start, end) {
  console.log("++++++++++++", str, start, end)
  var temp;

  if (start == end -1) {
    if (results[str] !== null) {
      results[str] = str;
    }
  } else {
    var str = str.split("");
    for (var i = 0; i < end; i++) {
      temp  = str[start];
      str[start] = str[i];
      str[i] = temp;

      console.log(str, start, i);
      perm(str.join(""), start+1, end)

      temp  = str[start];
      str[start] = str[i];
      str[i] = temp;
      console.log("RESTORE")
    }
  }
};
var input = 'abc'
// var leng = input.length
// perm(input, 0, leng)

console.log(results)



function recPerm(rest, soFar) {
    var next;
    var remaining;

    if (rest == '') {
        //console.log(soFar);
    } else {
        for (var i = 0; i < rest.length; i++) {
          remaining = rest.substr(i+1,rest.length-1);

          next = soFar + rest[i];
          console.log("remaining", remaining, next)
          recPerm(remaining, next);
        }
    }

}

recPerm(input, '');





