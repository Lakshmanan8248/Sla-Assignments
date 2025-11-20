function greet(name, message = "Welcome!") {
  console.log(`Hello ${name}, ${message}`);
}

// Calling the function
greet("Arun");               // Uses default message
greet("Bala", "Good Morning!"); // Custom message
