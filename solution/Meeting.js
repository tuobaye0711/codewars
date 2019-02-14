// John has invited people. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name. When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma. So the result of function meeting(s) will be:
// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.
// Notes
// You can see another examples in the "Sample tests".
// Translators are welcome for all languages.

const meeting = str => {
  const list = str
    .toUpperCase()
    .split(";")
    .sort((a, b) => {
      const [firstA, lastA] = a.split(":");
      const [firstB, lastB] = b.split(":");
      if (lastA < lastB) {
        return -1;
      } else if (lastA > lastB) {
        return 1;
      } else if (firstA <= firstB) {
        return -1;
      } else {
        return 1;
      }
    })
    .map(i => {
      const [first, last] = i.split(":");
      return `(${last}, ${first})`;
    });
  return list.join("");
};
