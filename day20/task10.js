function sumArray(numbers) {
  let sum = 0; // to store total
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; // add each number
  }
  return sum;
}

// Example use:
let result = sumArray([10, 20, 30, 40]);
console.log("Sum =", result);
