function getDaysInMonth(monthNumber) {
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return daysInMonth[monthNumber - 1];
  }
  
  // Example usage:
  let monthNumber = 2;
  
  let days = getDaysInMonth(monthNumber);
  console.log(`Month ${monthNumber} has ${days} days.`);