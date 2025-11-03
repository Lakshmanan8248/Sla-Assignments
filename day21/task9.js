const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// ✅ Using concat()
const combined1 = arr1.concat(arr2);
console.log("Using concat():", combined1);

// ✅ Using spread syntax
const combined2 = [...arr1, ...arr2];
console.log("Using spread syntax:", combined2);
