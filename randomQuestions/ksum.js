// Two SumMar 14 '11
// Given an array of integers, find two numbers such that they add up to a specific target number.
// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution.
// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2


//n!/k!(n-k)!

function kSum(arr, target){
  var hash = {};

  //caluclate number of possible combinations
  var n = arr.length;
  var k = 2;
  var n_fac = 1;
  var k_fac = 1;
  while(n >= 1){
    n_fac *= n;
    n--;
  }
  while(k >= 1){
    k_fac *= k;
    k--;
  }
  var diff = arr.length - 2;

  var diff_fac = 1;
  while(diff >= 1){
    diff_fac *= diff
    diff--;
  }

  var combos = n_fac / (k_fac * diff_fac);
  var count = 0;
  var i = 0;
  var j = 1;

  //hash each combination. no repeats

  while(count < combos){
    var sum = arr[i] + arr[j];
    hash[sum] = [arr[i], arr[j]]
    if(target === sum){
      return hash[target];
    }

    j++
    count++;
    if(j == arr.length){
      i++;
      j = i+1;
    }
  }
  return hash
}


console.log(kSum([2, 7, 11, 15], 9))
