function isDivisibleBy5And11(num) {
    return (num % 5 === 0) && (num % 11 === 0);
  }
  
  // Example usage:
  let num = 55;
  
  let isDivisible = isDivisibleBy5And11(num);
  console.log(`Is ${num} divisible by 5 and 11? ${isDivisible}.`);