function cleanDatabase(recordIds) {
    // Requirement: Remove all odd numbers from the array
    // FIX: Instead of splicing while looping (which skips items),
    // I build a new array with only even numbers.
    return recordIds.filter(id => id % 2 === 0);
}

// Test Case
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);
console.log("Final List:", cleaned); 