function countNotes(amount) {
    let notes = [100, 50, 10, 5, 2, 1];
    let count = 0;
    
    for (let i = 0; i < notes.length; i++) {
      while (amount >= notes[i]) {
        amount -= notes[i];
        count++;
      }
    }
    
    return count;
  }
  
  // Example usage:
  let amount = 123;
  
  let noteCount = countNotes(amount);
  console.log(`The minimum number of notes required to represent the amount ${amount} is ${noteCount}.`);