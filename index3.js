function checkSign(num) {
    if (num > 0) {
      return "positive";
    } else if (num < 0) {
      return "negative";
    } else {
      return "zero";
    }
  }
  
  // Example usage:
  let num = -5;
  
  let sign = checkSign(num);
  console.log(`The number ${num} is ${sign}.`);