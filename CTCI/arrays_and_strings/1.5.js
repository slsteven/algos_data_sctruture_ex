// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string

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

      new_str += str.charAt(i) + count;
      count = 1;
      console.log("STR", new_str)
    }
  }
}

compress(str);
