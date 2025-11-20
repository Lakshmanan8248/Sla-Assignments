function createAsyncCounter() {
  let count = 0; // closure variable

  return function increment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        count++; // closure keeps count
        console.log("Counter updated:", count);
        resolve(count);
      }, 1000); // async operation (1 sec)
    });
  };
}

const counter = createAsyncCounter();

// Using the async counter
counter(); // logs after 1 sec
counter(); // logs after 1 sec
counter(); // logs after 1 sec
