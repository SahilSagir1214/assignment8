function findMax(num1, num2, num3) {
    let max = num1;
    if (num2 > max) {
      max = num2;
    }
    if (num3 > max) {
      max = num3;
    }
    return max;
  }
  
  // Example usage:
  let num1 = 5;
  let num2 = 10;
  let num3 = 7;
  
  let maxNum = findMax(num1, num2, num3);
  console.log(`The maximum number between ${num1}, ${num2} and ${num3} is ${maxNum}.`);