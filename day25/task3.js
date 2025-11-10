// Define custom error class
class UnderAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnderAgeError";
  }
}

// Function to check age
function checkAge(age) {
  try {
    if (age < 18) {
      throw new UnderAgeError("Access denied: You must be at least 18 years old.");
    }
    console.log("Access granted. Welcome!");
  } catch (error) {
    if (error instanceof UnderAgeError) {
      console.error("Custom Error:", error.message);
    } else {
      console.error("Unknown Error:", error);
    }
  }
}

// Example usage
checkAge(16); // ❌ Throws custom error
checkAge(20); // ✅ Access granted
