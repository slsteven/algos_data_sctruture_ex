// # to show 12 results per page, but we don't want the same host to dominate the results.

// # Write a function that will reorder the list so that a host shows up at most once on a page if
// # possible, but otherwise preserves the ordering. Your program should return the new array and
// # print out the results in blocks representing the pages.

// "host_id,listing_id,score,city"

var listings = [
  "1,28,300.1,San Francisco",
  "4,5,209.1,San Francisco",
  "20,7,208.1,San Francisco",
  "23,8,207.1,San Francisco",
  "16,10,206.1,Oakland",
  "1,16,205.1,San Francisco",
  "6,29,204.1,San Francisco",
  "7,20,203.1,San Francisco",
  "8,21,202.1,San Francisco",
  "2,18,201.1,San Francisco",
  "2,30,200.1,San Francisco",
  "15,27,109.1,Oakland",

  "10,13,108.1,Oakland",
  "11,26,107.1,Oakland",
  "12,9,106.1,Oakland",
  "13,1,105.1,Oakland",
  "22,17,104.1,Oakland",
  "1,2,103.1,Oakland",
  "28,24,102.1,Oakland",
  "18,14,11.1,San Jose",
  "6,25,10.1,Oakland",
  "19,15,9.1,San Jose",
  "3,19,8.1,San Jose",
  "3,11,7.1,Oakland",

  "27,12,6.1,Oakland",
  "1,3,5.1,Oakland",
  "25,4,4.1,San Jose",
  "5,6,3.1,San Jose",
  "29,22,2.1,San Jose",
  "30,23,1.1,San Jose"
];
//iterate through listings
//group listing by unique hosts
//take duplicate host listing, temporarily store in array, and add to first index of next page
//ensure page length is 12

function sort_listing(listings){

  var arr = [];
  console.log(listings.length);

   for(var i = 0; i<listings.length; i++){
     var str_listing = listings[i];
     var listing = str_listing.split(',');
     arr.push({
       host_id: listing[0],
       listing_id: listing[1],
       score: listing[2],
       city: listing[3]
     })
   };
  //console.log(arr);
  //store host_id in hash table. make sure total == 12
  var page_hash = {};
  var temp = [];
  var page = [];
  var page_num = 0;
  var count = 0;
  page[page_num] = [];
  for(listing in arr){
    if(page_hash[arr[listing].host_id] == null){
      page_hash[arr[listing].host_id] = arr[listing].host_id;
      page[page_num].push(arr[listing]);
      count++;
    }
    else {
      //if duplicate id, store in temp
      temp.push(arr[listing]);
    }
    //if page has 12 listings, create new page and add all listings from temp
    //restart counter with length equal to length of temp
    //clear count and increment page number
    if(count > 11){
      page_num++;
      page[page_num] = [];
      pagh_hash = {};
      if(temp.length == 0){
        count = 0;
      } else {
        page[page_num] = temp;
        count = temp.length;
        temp = [];
      }
    }
  }
  console.log(page);
  console.log(page[2].length);
}
sort_listing(listings);


