let expect = require("chai").expect;

function titleCase(title) {
  let words = title.split(" ");
  let titleCasedWords = words.map(function(word) {
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCasedWords.join(" ");
}

expect(titleCase("the great diaper dare")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("pissing")).to.equal("Pissing");
expect(titleCase("the great diaper dare")).to.equal("The Great Diaper Dare");
