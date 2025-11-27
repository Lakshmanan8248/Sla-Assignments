// messy.js

let items = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < items.length; i++) {
  total = total + items[i];
}

console.log("Total is: " + total);

let avg = total / items.length;
console.log("Average is: " + avg);

let highest = items[0];
for (let i = 0; i < items.length; i++) {
  if (items[i] > highest) {
    highest = items[i];
  }
}

console.log("Highest: " + highest);

for (let i = 0; i < items.length; i++) {
  if (items[i] % 2 === 0) {
    console.log(items[i] + " is even");
  }
}
