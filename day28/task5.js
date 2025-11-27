function saveCurrentTime() {
  const now = new Date();
  const currentTime = now.toLocaleTimeString();

  console.log("Current Time:", currentTime);

  sessionStorage.setItem("currentTime", currentTime);
}

// Run the function
saveCurrentTime();
