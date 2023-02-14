function findMax(num1, num2) {
    return (num1 > num2) ? num1 : num2;
  }
  
  // Example usage:
  let num1 = 5;
  let num2 = 10;
  
  let maxNum = findMax(num1, num2);
  console.log(`The maximum number between ${num1} and ${num2} is ${maxNum}.`);