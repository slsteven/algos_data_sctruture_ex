// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string


//v1
var str = "aabcccccaaa";
function compress(str){
  var count = 1;
  var new_str = "";
  var leng = str.length;
  for(var i = 0; i < leng; i++){
    if(str[i] == str[i+1]){
      count++;
    } else {
      console.log(count)

      new_str += str[i] + count;
      count = 1;

    }
  }
  console.log("STR", new_str)
}

compress(str);

//v2
var input = 'aabcccccaaa'
function compress(str) {
  var end = 0;
  var count = 1;
  var leng = str.length;
  var arr = [];
  for(var i = 1; i < leng; i++){
    if(str[i-1] === str[i]){
      count++
    } else {
        arr.push(str[i-1]);
        arr.push(count);
        count = 1
        console.log(str)
      }
  }
  arr.push(str[str.length-1])
  arr.push(count)
  return arr.join("");
}


console.log(compress(input));
