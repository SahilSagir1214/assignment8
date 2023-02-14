function checkUpperLower(char) {
    if (char >= 'A' && char <= 'Z') {
      return "uppercase";
    } else if (char >= 'a' && char <= 'z') {
      return "lowercase";
    } else {
      return "not an alphabet";
    }
  }
  
  // Example usage:
  let char = "A";
  
  let upperLower = checkUpperLower(char);
  console.log(`The character "${char}" is an ${upperLower} alphabet.`);