let password = prompt("Enter your password:");

if (password.length >= 8) {
  console.log("✅ Your password is secure.");
} else {
  console.log("❌ Password too short! It must be at least 8 characters.");
}
