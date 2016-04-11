// Given an array of stock prices, and the date of the current stock price, return the maximum profit that can be made.
//55.39 109.23 48.29 81.59 105.53 94.45 12.24

var input = [55.39, 109.23, 48.29, 81.59, 105.53, 94.45, 12.24];

function maxStockPrice(arr) {
  var initialIdx = 0;
  var finalIdx = 1;
  var maxPrice = arr[finalIdx] - arr[initialIdx];
  var summary;
  var leng = arr.length;

  while (initialIdx < leng) {

    var current = arr[finalIdx] - arr[initialIdx];

    if (current >= maxPrice) {
      maxPrice = current;
      summary = {
        buy: arr[initialIdx],
        sell: arr[finalIdx]
      };
    };
    finalIdx++;
    if (finalIdx == leng + 1) {
      initialIdx++;
      finalIdx = initialIdx + 1;
    };
  };
  return summary;
};

console.log(maxStockPrice(input));


































