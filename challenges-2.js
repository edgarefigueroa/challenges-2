console.log(`Add to Zero`);
// Add To Zero
// Difficulty
// Easy
// Concepts
// Loops, General


// Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.
// For example:
// [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.
// [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.
// [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.
//array = [1, 4, 11, 2, 37, -4]
array = [0, 1, 2, 3, 4, 5]
let value = false;
for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === 0) {
      value = true;
      console.log(array[i], array[j])
    } 
  }
}
console.log(value)

console.log(`\nFind Lucky Numbers`)
// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Loops, General


// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

function findLuckyNumbers(n){
    let possibleNums = [1,2,3,4,5,6,7,8,9,10]
    let luckyNums = []
    //create a for-loop to iterate over possibleNums array and move items to luckyNums
    for(let i = 0;i < n;i++){
      let randomIndex = Math.floor(Math.random() * possibleNums.length)
      luckyNums.push(possibleNums[randomIndex])
      possibleNums.splice(randomIndex,1)
    }
    return luckyNums
  }
  
  console.log(findLuckyNumbers(8))

console.log(`\nHas Unique Characters`)
// Has Unique Characters
// Difficulty
// Easy
// Concepts
// Sets, Conditions
  
// Given a word, return true if that word contains only unique characters. Return false otherwise.
// For example:  
// hasUniqueChars("Monday")
// // returns true
// hasUniqueChars("Moonday")
// // returns false
// Uppercase and lowercase letters should be considered separately:
// hasUniqueChars("Bob")
// // returns true

function uniqueChar(str)
{
    for(let i = 0; i < str.length; i++)
        for(let j = i + 1; j < str.length; j++)
            if (str[i] == str[j]){
                return false;
            }
    return true;
}
console.log(uniqueChar("Monday"));
console.log(uniqueChar("Moonday"));
/////////////////////////////


// let input = "Monday";
 
// if (uniqueChar(input) == true)
//     console.log("The String " + input +
//                    " has all unique characters");
// else
//     console.log("The String " + input +
//                    " has duplicate characters");

/////////////////////////////
// const hasUniqueChars = (word) => {
//     let hasUniqueChar = true;
//     const array = [];
//     for (let i = 0; i < word.length; i++) {
//       if (!array.includes(word[i])) {
//         array.push(word[i])
//       } else {
//         hasUniqueChar = false
//       }
//     }
//     return hasUniqueChar;
//   }
//   console.log(hasUniqueChars("Monday"));
//   console.log(uniqueChar("Moonday"));

console.log(`\nIs Palindrome`);
// Is Palindrome
// Difficulty
// Easy
// Concepts
// Loops, General

// Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.
// For example:
// isPalindrom("a")
// // returns true
// isPalindrom("noon")
// // returns true
// isPalindrom("hello")
// // returns false
// Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:
// isPalindrom("Racecar")
// // returns false
// isPalindrom("racecar")
// // returns true


  function palindrome(str) {
    var len = Math.floor(str.length);
    for (var i = 0; i < len; i++)
      if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
  }

  console.log(palindrome("racecar"))