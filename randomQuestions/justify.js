var str = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

function justify(str) {

  var str_arr = [];
  str_arr = str.split(" ");

  var leng = str_arr.length;
  var line_width;
  var max_line_width = 50;
  var justified = [];
  var temp = '';
  var extra = 0;
  var done;
  var start_line = -1;
  var end_line;
  console.log(str_arr)
  var num_words = 0;
  for (var i = 0; i < leng; i++) {
    console.log("EXTRA: ", extra)
    if( extra === 0) {
      console.log("START", temp, temp.length)
      if(temp.length + str_arr[i].length +1 <= max_line_width){

        temp += str_arr[i];
        temp += ' ';
        num_words++;

      } else {

        temp = temp.trim();
        console.log("after trim====================:", temp,  temp.length)
        extra = max_line_width - temp.length -1;
        end_line = i;

        if(extra > 0) {

          console.log("start over", temp, extra, str_arr[i])
          end_line = i - 1;
          i = start_line;
          temp = '';
          continue;
        }
        console.log('asdfasdfasdf', str_arr)
       //console.log(temp, temp.length, extra)
        temp = str_arr[i];
        temp += '';
      }
    }




    if(extra > 0) {

      str_arr[i] = str_arr[i] + '*';

        extra--;
        console.log("start over2===============", end_line, extra, str_arr[i], num_words)


        if(extra > 0 && i == num_words -2){
          i = start_line;
        }

        if(extra == 0) {
          i = start_line;
          start_line = done;
          console.log("DONE", i)
        }
    }


}
}

var j = justify(str);
console.log(j);



//x ** x ** x** x** x** x
