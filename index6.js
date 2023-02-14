function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
  }
  
  // Example usage:
  let year = 2020;
  
  let leap = isLeapYear(year);
  console.log(`Is ${year} a leap year? ${leap}.`);