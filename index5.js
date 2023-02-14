function checkEvenOdd(num) {
    return (num % 2 === 0) ? "even" : "odd";
  }
  
  // Example usage:
  let num = 4;
  
  let evenOdd = checkEvenOdd(num);
  console.log(`The number ${num} is ${evenOdd}.`);