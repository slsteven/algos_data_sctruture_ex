// Given an array of stock prices, and the date of the current stock price, return the maximum profit that can be made.
//55.39 109.23 48.29 81.59 105.53 94.45 12.24


function stockPrice(arr){
  var hash = {};

  //caluclate number of possible combinations
  var n = arr.length;
  var k_len = 2
  var k = 2;
  var n_fac = 1;
  var k_fac = 1;
  //calculate n!
  while(n >= 1){
    n_fac *= n;
    n--;
  }
  //calculate k!
  while(k >= 1){
    k_fac *= k;
    k--;
  }
  //calculate k!(n-k)!
  var diff = arr.length - k_len;
  var diff_fac = 1;
  while(diff >= 1){
    diff_fac *= diff
    diff--;
  }

  var combos = n_fac / (k_fac * diff_fac);
  //======================================================
  var count = 0;
  var i = 0;
  var j = 1;
  var best = 0;

  while(count < combos){
  //to show only positive gains
  //if(arr[i] < arr[j]){
    var sum = arr[j] - arr[i];
    hash[sum] = [arr[i], arr[j]]
    if(sum > best){
      best = sum;
    }
  //}

    j++
    count++;
    if(j == arr.length){
      i++;
      j = i+1;
    }
  }
  return hash[best];
}

console.log(stockPrice([55.39, 109.23, 48.29, 81.59, 105.53, 94.45, 12.24]))





