function HashTable() {
  // given fixed size of array of 26 slots
  this.table = new Array(26);
}
HashTable.prototype.buildLinks = function() {
  // set an empty array for all indexes in this.table
}
HashTable.prototype.linkBuilt = function() {
  // determines if links have been built yet
}
HashTable.prototype.simpleHash = function(data) {
  // determines the hash value given data
  // how can we use the ASCII values to find appropriate data (use charCodeAt())
  var ascii_sum = 0;

  for(var i = 0; i < data.length; i++){
    ascii_sum += data.charCodeAt(i)
  }

  return ascii_sum % this.table.length;
}
HashTable.prototype.betterHash = function(data) {
  // how can we write a better Hash using ASCII values?
}
HashTable.prototype.simplePut = function(data) {
  // place data in appropriate place by using simpleHash
  var result = this.simpleHash(data);
  this.table[result] = data;
}
HashTable.prototype.linkPut = function(data) {
  // build links if not built yet and place data in the right place
}
HashTable.prototype.showDistribution = function() {
  // shows distribution of hash table
  for(var i = 0; i < this.table.length; i++) {
    console.log(this.table[i]);
  }
}
var names = ["Tony", "Tori", "Kate", "Kyle", "Thomas", "Dale",
             "David", "Daisy", "Andy", "Albert", "Dane", "Shane", "Lane",
             "Janet", "Katelyn", "Janet", "Vivian", "Joe"];

var simpleHashTable = new HashTable();

for(var i = 0; i < names.length; i++) {
  simpleHashTable.simplePut(names[i]);
}
simpleHashTable.showDistribution();


// var betterHashTable = new HashTable();

// for(var i = 0; i < names.length; i++) {
//   betterHashTable.linkPut(names[i]);
// }
// betterHashTable.showDistribution();
