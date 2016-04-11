// create a program or an object that can do these 3 functions
// `create(path, value)`, `setValue(path, value)`, `getValue(path)`

function Paths() {
  this.root = null;
}

function Path(str) {
  this.value = str;
  this.data = [];
  this.nextPath = null;
};

Paths.prototype.create = function(path, value) {
  //separate paths ex: /a/b => ['/a', '/b']
  var allPaths = [];
  var current = this.root;
  var newPath;
  var setValue = '';

  for (var i = 0; i < path.length; i+=2) {
    allPaths.push(path.substr(i, 2));
  };

  //if root is empty add path and new value
  if (!current) {
    for (var j = 0; j < allPaths.length; j++) {
      if (this.root === null) {
        newPath = new Path(allPaths[j])
        this.root = newPath;
        current = this.root;
      } else {
        newPath = new Path(allPaths[j])
        current.nextPath = newPath;
        current = current.nextPath;
      };
    }; //reached end of path, add new value
    if (current.nextPath === null) {
      setValue += '/';
      setValue += value;
      newPath = new Path(setValue);
      current.nextPath = newPath;
    };
  };
  //if root is not empty, check for valid path and add new value
  // } else {
  //   console.log("not empty")
  //   for (var k = 0; k < allPaths.length; k++) {
  //     console.log("current", current.value)
  //     if (allPaths[k] === current.value) {
  //       current = current.nextPath;
  //     }
  //   }
  // }

};

Paths.prototype.setValue = function(path, value) {
  var current = this.root;
  //iterate through paths to build complete path
  var currentPath = '';
  while (current != null) {
    currentPath += current.value;
    current = current.nextPath;
  };
  //reset current
  current = this.root;

  var pathToReplace = path.substr(path.length - 2, 2);

  //if path is a substring of currentPath than path is valid
  //replace with new value
  if (currentPath.indexOf(path) > -1) {
    while (current.value != pathToReplace) {
      current = current.nextPath;
    };
    current.value = ('/' + value);
  };
};

Paths.prototype.getValue = function(path) {
  var current = this.root;
  var endOfPath = path.substr(path.length - 2, 2);
  while (current.value != endOfPath) {
    current = current.nextPath;
  };
  var getVal = current.nextPath.value;
  return [getVal];
};

Paths.prototype.displayPath = function() {
  var current = this.root;
  while (current != null) {
    current = current.nextPath;
  };
};

var paths = new Paths();

paths.create('/a/b', 'c'); //returns '/a/b/c'
paths.setValue('/a/b', 'z'); //returns '/a/z/c'
console.log(paths.getValue('/a/z')); //returns ['c']


console.log(paths)

paths.displayPath();
