function calculateGrossSalary(basicSalary) {
    let HRA;
    let DA;
    
    if (basicSalary <= 10000) {
      HRA = basicSalary * 0.2;
      DA = basicSalary * 0.8;
    } else if (basicSalary <= 20000) {
      HRA = basicSalary * 0.25;
      DA = basicSalary * 0.9;
    } else {
      HRA = basicSalary * 0.3;
      DA = basicSalary * 0.95;
    }
    
    let grossSalary = basicSalary + HRA + DA;
    return grossSalary;
  }
  
  // Example usage:
  let basicSalary = 15000;
  
  let grossSalary = calculateGrossSalary(basicSalary);
  console.log(`Gross Salary: ${grossSalary}`);