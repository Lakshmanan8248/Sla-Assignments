// Function that performs a task
function doTask(callback) {
  console.log("Doing the task...");
  
  // Simulate a delay (e.g., task in progress)
  setTimeout(() => {
    console.log("Task finished!");
    callback(); // call the callback after the task is done
  }, 2000);
}

// Callback function
function showCompleteMessage() {
  console.log("Task Complete!");
}

// Call the main function with callback
doTask(showCompleteMessage);
