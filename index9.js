function getWeekday(weekNumber) {
    let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[weekNumber % 7];
  }
  
  // Example usage:
  let weekNumber = 2;
  
  let weekday = getWeekday(weekNumber);
  console.log(`Weekday ${weekNumber} is ${weekday}.`);