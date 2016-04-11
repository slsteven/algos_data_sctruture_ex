//add new constraints to one to one hash map. values and keys are unique
// GetValueFromKey(key) will return value
// GetKeyFromValue(value) will return key
// set(key, value); //set map

// { a : [1, 2, 3]}
// GetKeyFromValue(1) -> 'a'

function myMap() {
    this.keys = {};
    this.values = {};
};

myMap.prototype.set = function(key, value) {
  //check if key and value
  if (this.keys[key]) {

      console.log("already exisits")
      return false;

  };

 this.keys[key] = value;
 if (!this.values[value]) {
  this.values[value] = [];
 }

 this.values[value][key] = true;
};

myMap.prototype.getValueFromKey = function(key) {
  return this.keys[key];
}

myMap.prototype.getKeyFromValue = function(value) {
  return this.values[value]
}

var map = new myMap();
map.set('a', 1)
map.set('a', 2)
map.set('b', 1)
console.log(map.getKeyFromValue(1))
console.log(map.getValueFromKey('a'))

console.log(map);
