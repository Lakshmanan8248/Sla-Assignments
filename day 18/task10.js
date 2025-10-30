

let username = prompt("Enter your username:");
let password = prompt("Enter your password:");

if (username === "admin") {
  if (password === "12345") {
    console.log("✅ Login successful! Welcome, " + username + "!");
  } else {
    console.log("❌ Incorrect password!");
  }
} else {
  console.log("⚠️ Username not found!");
}
