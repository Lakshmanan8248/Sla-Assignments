function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

// Example usage:
try {
  console.log(divide(10, 2)); // Output: 5
  console.log(divide(8, 0));  // Throws error
} catch (error) {
  console.error("Error:", error.message);
}
