// Words to match
var words = ["dell", "ledl", "abc", "cba"];

// The output object
var anagrams = {};

for (var i in words) {
    var word = words[i];

    // sort the word like you've already described
        // console.log(word)

    var sorted = word.split("").sort().join("");

    // If the key already exists, we just push
    // the new word on the the array
    if (anagrams[sorted] != null) {
        anagrams[sorted].push(word);
    }
    // Otherwise we create an array with the word
    // and insert it into the object
    else {
        anagrams[sorted] = [ word ];
    }
}
console.log(anagrams)
