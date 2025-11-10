try {
  // Force an error
  throw new Error("Something went wrong!");
} 
catch (error) {
  console.log("Error Name:", error.name);
  console.log("Error Message:", error.message);
}
