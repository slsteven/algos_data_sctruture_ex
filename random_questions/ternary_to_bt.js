//is there a link to the parent?

// if you see "?" set as left child.
// if you see ":" go to parent > if right is not null and parent not null keep going,
//   otherwise add to the right

var str = "a?b?c:d:e";

function convert(str){
  var currentNode = new Node(str[0]);
  for(var i = 1; i<str.length; i+=2){
    if(str[i] == "?"){
      currentNode.left = new Node(str[i+1]);
      currentNode = currentNode.left;
    } else {
      if(str[i] == ":"){
        currentNode = currentNode.parent;
        while(currentNode.right != null && currentNode.parent != null){
          currentNode = currentNode.parent;
        }
        currentNode.right = new Node(str[i+1])
        currentNode = currentNode.right;
      }
    }
  }
  return currentNode;
}
