/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let strArr = str.toLowerCase().split("").sort();
    let vowelCount = 0;
    for (let index = 0; index < strArr.length; index++) {
      if(vowels.includes(strArr[index])){
        vowelCount += 1;
      }
    }

    return vowelCount;
}

module.exports = countVowels;