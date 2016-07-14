console.log("***QUESTION 1***");
//Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.
var persons = {
  'Chuck': 22,
  'Brian': 46,
  'Kevin': 77
};
Object.

console.log("***QUESTION 2***");
//Define a function called longestWord that takes a string and returns the longest word in the string.

function longestWord(str) {
  var punctuationlessString = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  var arrayOfStrings = punctuationlessString.split(" ");
  var maxString = 0;
  var longestWord = 0;
  for (var i=0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].length > maxString) {
      maxString = arrayOfStrings[i].length;
      longestWord = arrayOfStrings[i];
    }
  }
  return longestWord;
}
console.log(longestWord("the cat... walked by."));
console.log(longestWord("He went by..."));

//console.log("***QUESTION 3***");
//Refactor the longestWord function so that it ignores punctuation.
//see function above

console.log("***QUESTION 4***");
//Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
function factorial(num) {
  if (num < 0) {
    return;
  }
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}
console.log(factorial(8));

//console.log("***QUESTION 5***");
//Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.
function checkPalindrome(str) {
    var str = str.replace(/[^a-zA-Z0-9]+/gi, '').toLowerCase();
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrome("No x in Nixon"));
console.log(checkPalindrome("Humpty Dumpty"));
console.log(checkPalindrome("Taco cat"));

//input = [[11, 13], [0, 2]]
//output = [2, 0, 13, 11]
arr1 = [[11, 13],[0, 2]];
function flattenArr(arr) {
  var output = [];
  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      output.unshift(arr[i][j]);
    }
  }
  return output;
}
console.log(flattenArr(arr1));
