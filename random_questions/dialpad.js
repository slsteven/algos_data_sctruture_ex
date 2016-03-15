var _ = require('underscore')

var arr = [ '1', '42', '100848', '4938532894754', '1234567', '472844278465445', '1134123656142'];


//Case 1: length = 7, DD = 0, SD = 7
//Case 2: length = 8, DD = 1, SD = 6
//Case 3: length = 9, DD = 2, SD = 5
//Case 4: length = 10, DD = 3, SD = 4
//.. etc...

//make sure all numbers are unique and between 1-59


// var numberOfNumbersInLottery = 7;

// //var lottoString = '472844278465445'
//  // var lottoString = '4938532894754'
// //var lottoString = '1234567'
// var lottoString = '1134123656142';
// var numberOfNumbersInString = lottoString.length;
// var numberOfPairsRequired = lottoString.length - numberOfNumbersInLottery;
//console.log(numberOfPairsRequired)
// var combos = [];
// var next;

// for (var j = 0; j < lottoString.length-1; j++) {
//   var startIndex = j;
//   var endIndex = startIndex + 2;
//   var firstPair = lottoString.substring(startIndex, endIndex);
//   var arr = [];
//   arr.push([startIndex, endIndex]);
//   if (arr.length === numberOfPairsRequired) {
//     combos.push([startIndex, endIndex]);
//     arr = [];
//   };

//  // console.log("loop1", j)

//   for (var m = j+2; m < lottoString.length -1; m++) {
//     if (numberOfPairsRequired < 2) {
//       break;
//     }
//     var startIndexNext = m;
//     var endIndexNext = startIndexNext + 2;
//     var nextPair = lottoString.substring(startIndexNext, endIndexNext)
//     arr.push([startIndexNext, endIndexNext]);
//     if (arr.length === numberOfPairsRequired) {
//       combos.push(arr);
//       arr = [[startIndex, endIndex]];
//     };

//       //console.log("loop2", m)


//     for (var n = m + 2; n < lottoString.length-1; n++) {
//       if (numberOfPairsRequired < 3) {
//         break;
//       };
//       var startIndexNextNext = n;
//       var endIndexNextNext = startIndexNextNext + 2;
//       var nextNextPair = lottoString.substring(startIndexNextNext, endIndexNextNext);
//       arr.push([startIndexNextNext,endIndexNextNext]);
//       if (arr.length === numberOfPairsRequired) {
//         combos.push(arr);
//         arr = [[startIndex, endIndex],[startIndexNext, endIndexNext]];
//       };
//         //console.log("loop3", n)

//     };
//    }
// };
//console.log("iterative", combos, combos.length);




//Recurse Start ===============================================================================
function recurse(arr) {
  //var lottoString = '472844278465445'
  //var lottoString = '4938532894754'
  //var lottoString = '1234567'
  //var lottoString = '1134123656142';
  console.log(arr);
  var lottoString = arr;

  var numberOfNumbersInLottery = 7;
  var numberOfNumbersInString = lottoString.length;
  var numberOfPairsRequired = lottoString.length - numberOfNumbersInLottery;

  var pairCombos = [];

  //get every pair combo start and end index to splice out of stirng later
  function getEveryPairCombo(startingIndex, i, existingArray, pairsRequired) {
    for (var pointer = startingIndex; pointer < i -1; pointer++) {
      var array = existingArray.slice(0);

      var startIndex = pointer;
      var endIndex = startIndex + 2;
      // console.log("exisiting", array, pointer)
      array.push([startIndex, endIndex]);

      if (array.length === pairsRequired) {
      //console.log("recurse====", "array:", array, "array length:", array.length, "Pairs required:", pairsRequired);
        pairCombos.push(array);
        array = [];
      } else {
        getEveryPairCombo(pointer + 2, i, array, pairsRequired);
      };
    };
  };
  getEveryPairCombo(0, numberOfNumbersInString, [], numberOfPairsRequired);

  //console.log("combos", pairCombos);

  //12345678

  //use index of pairs and single digits to assemble all lottery picks
  function combinePairWithSingleDigits(pairCombos, lottoString, numberOfNumbersInLottery) {
    var numberOfCombinations = pairCombos.length;
    var count = 0;
    //console.log("pair combinations", pairCombos)
    //console.log("number of combinations: ", numberOfCombinations, "count: ", count, "current combo: ",pairCombos[count])
    var temp = [];
    var results = [];
    //make sure we arent checking an empty array (strings < 7 and >14)
    if (pairCombos == []){
      return;
    }
    if (lottoString.length === 7) {
      temp = lottoString.split("");
      results.push(temp);
      return results;
    }

    for (var i = 0; i < lottoString.length; i++) {

      for (var j = 0; j < pairCombos[0].length; j++) {

        var begIdxOfString = pairCombos[count][j][0];
        var endIdxOfString = pairCombos[count][j][1];

        // console.log("___", begIdxOfString, endIdxOfString)
        //Add pair if index of pair if startIndex of pair equals current stringLotto index(main str)
        //if yes, add to temp, and shift stringLotto index + 2
        if (begIdxOfString == i) {
          temp.push(lottoString.substring(begIdxOfString, endIdxOfString));
          i++;
          i++;
        };
      };
      //if we have not reached end of stringLotto index, add single digit to temp
      if (i < lottoString.length) {
        temp.push(lottoString[i]);
      };
      //console.log("TEMP", temp, i, j)

      //check if we have 7 picks
      //clear temp, and move to next pair combination
      //store temp into results array
      //start both loops over for next combination
      if (temp.length == numberOfNumbersInLottery) {
        count++;
        //console.log("inside IF", temp);
        results.push(temp);
        if (results.length == numberOfCombinations) {
          return results;
        };
        temp = [];
        i = -1;
        j = -1;
      };
    };
  };


  function filterResults(numberOfNumbersInLottery, results) {
    //make sure all values are unique and length there are 7 numbers
    //use underscore _.unique to check for uniquness
    var finalPicks = [];
    for (var i = 0; i < results.length; i++) {
      var res = _.unique(results[i])

      //make sure all picks are between 1-59
      var res = res.filter(inRange);

      if (res.length == numberOfNumbersInLottery) {
        finalPicks.push(results[i]);
      }
    }
   return finalPicks;
  };


  function inRange(value, index, self) {
    if (value >= 1 && value <= 59) {
      return value;
    }
  }


  var res = combinePairWithSingleDigits(pairCombos, lottoString, numberOfNumbersInLottery);
  var Answer = filterResults(numberOfNumbersInLottery, res);
  console.log("Answer: ", Answer);
}
//Recurse END ===============================================================================

function getLotteryPicks(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length >= 7 && arr[i].length <= 14) {
      var x = recurse(arr[i])
    };
  }
}

getLotteryPicks(arr);



