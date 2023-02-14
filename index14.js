function calculateElectricityBill(units) {
    let totalBill = 0;
    let unitCharge;
    
    if (units <= 50) {
      unitCharge = 0.5;
    } else if (units <= 150) {
      unitCharge = 0.75;
    } else if (units <= 250) {
      unitCharge = 1.2;
    } else {
      unitCharge = 1.5;
    }
    
    totalBill = units * unitCharge;
    let surcharge = totalBill * 0.2;
    totalBill += surcharge;
    
    return totalBill;
  }
  
  // Example usage:
  let units = 300;
  
  let totalBill = calculateElectricityBill(units);
  console.log(`Total Electricity Bill: ${totalBill}`);