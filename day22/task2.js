const user = {
  username: "Lakshmanan",
  isLoggedIn: false,

  // Method to log in
  login() {
    this.isLoggedIn = true;
    console.log(`${this.username} has logged in.`);
  },

  // Method to log out
  logout() {
    this.isLoggedIn = false;
    console.log(`${this.username} has logged out.`);
  }
};

// Example usage
user.login();   // Output: Lakshmanan has logged in.
user.logout();  // Output: Lakshmanan has logged out.
