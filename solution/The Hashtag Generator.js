// (5kyu) The marketing team is spending way too much time typing in hashtags.
// Let's help them with out own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

const generateHashtag = str => {
  str = str
    .split(" ")
    .filter(i => i)
    .map(i => i.substr(0, 1).toUpperCase() + i.substr(1))
    .join("");
  return str && str.length < 140 ? "#" + str : false;
};
