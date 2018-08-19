// Write a function named firstNonRepeatingLetter† that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

// † Note: the function is called firstNonRepeatingLetter for historical reasons, but your function should handle any Unicode character.

const firstNonRepeatingLetter = s => {
  if (s === "") {
    return "";
  }
  let tmp = "";
  let repeat = s
    .toLowerCase()
    .split("")
    .sort()
    .map(el => {
      if (tmp !== el) {
        tmp = el;
        return "";
      } else {
        return el;
      }
    })
    .join("");
  for (let i = 0; i < s.length; i++) {
    if (repeat.indexOf(s[i].toLowerCase()) === -1) {
      return s[i];
    }
  }
  return "";
};
