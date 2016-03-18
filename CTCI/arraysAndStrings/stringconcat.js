//different ways to concat a string in JS

//inefficient
str = "a" + "b";
str += "c";
str = str.concat("d", "e");


//efficient
str = ["a", "b", "c", "d", "e"].join("");

//or create StringBuffer
function StringBuffer(){
  this.buffer = [];
}

StringBuffer.prototype.append = function(string) {
  this.buffer.push(string);
  return this;
}

StringBuffer.prototype.toString = function(){
  return this.buffer.join("")
}

function example(arr){
  var sb = new StringBuffer();
  for(var i = 0; i < arr.length; i++){
    sb.append(arr[i])
  }
  return sb.toString();
}

console.log(example(["a", "b", "c", "d", "e"]));
