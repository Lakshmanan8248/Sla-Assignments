
function getUserName(callback) {
  let name = ("Enter your name:");
  callback(name); 
}


function greetUser(userName) {
  console.log("Hello, " + userName + "! Welcome!");
}

getUserName(greetUser);
