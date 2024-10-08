/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '') //Removes any non-alphanumeric character
  let strArr = str.split("");
  let start = 0;
  let end = strArr.length - 1;
  while(start <= end){
    if(strArr[start] != strArr[end]){
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;

}

module.exports = isPalindrome;
