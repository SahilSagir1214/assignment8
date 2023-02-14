function checkVowelConsonant(letter) {
    letter = letter.toLowerCase();
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      return "vowel";
    } else {
      return "consonant";
    }
  }
  
  // Example usage:
  let letter = "A";
  
  let vowelConsonant = checkVowelConsonant(letter);
  console.log(`The letter "${letter}" is a ${vowelConsonant}.`);