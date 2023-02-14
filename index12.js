function calculatePercentageAndGrade(physics, chemistry, biology, mathematics, computer) {
    let totalMarks = physics + chemistry + biology + mathematics + computer;
    let percentage = totalMarks / 500 * 100;
    
    let grade;
    if (percentage >= 90) {
      grade = "A";
    } else if (percentage >= 80) {
      grade = "B";
    } else if (percentage >= 70) {
      grade = "C";
    } else if (percentage >= 60) {
      grade = "D";
    } else if (percentage >= 40) {
      grade = "E";
    } else {
      grade = "F";
    }
    
    return { percentage, grade };
  }
  
  // Example usage:
  let physics = 85;
  let chemistry = 75;
  let biology = 95;
  let mathematics = 65;
  let computer = 80;
  
  let result = calculatePercentageAndGrade(physics, chemistry, biology, mathematics, computer);
  console.log(`Percentage: ${result.percentage}%, Grade: ${result.grade}`);