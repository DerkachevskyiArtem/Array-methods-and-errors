"use strict";

// Task 1
function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new TypeError("Arguments not a string");
  }

  let result = str
    .trim()
    .split(" ")
    .map(function (word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    // Або так
    // .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase)
    .join(" ");

  return result;
}

// Task2
function countVowels(str) {
  if (typeof str !== "string") {
    throw new TypeError("Argument must be a string");
  }

  const vowels = ["a", "E", "i", "O", "u"];

  const vowelsToLowerCase = vowels.map(function (vowel) {
    return vowel.toLowerCase();
  });

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowelsToLowerCase.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

// Revised task 2
function countCustomVowels(str, vowelsArr) {
  if (typeof str !== "string") {
    throw new TypeError("First argument must be a string");
  }

  if (!Array.isArray(vowelsArr)) {
    throw new TypeError("Second argument must be an array");
  }

  const vowelsToLowerCase = vowelsArr.map(function (vowel) {
    return vowel.toLowerCase();
  });
  // Або так
  //vowelsArr.map(vowel => vowel.toLowerCase());

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowelsToLowerCase.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
