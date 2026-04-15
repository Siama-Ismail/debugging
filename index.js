// function cleanDatabase(recordIds) {
// // Requirement: Remove all odd numbers from the array
// for (let i = 0; i < recordIds.length; i++) {
// if (recordIds[i] % 2 !== 0) {
// recordIds.splice(i, 1);
// i--;
// }
// }
// return recordIds;
// }
// // Test Case
// const data = [1, 3, 4, 6, 7, 9, 10];
// const cleaned = cleanDatabase(data);
// console.log(cleaned)



function cleanDatabase(recordIds) {
  const cleaned =[]
for (let i = 0; i < recordIds.length; i++) {
if (recordIds[i] % 2 !== 0) {
cleaned.push(recordIds[i]);
}
}
return cleaned;
}
// Test Case
const data = [1, 3, 4, 6, 7, 9, 10];
const cleaned = cleanDatabase(data);
console.log(cleaned)