// Define a constructor function
function Student(name, age) {
  this.name = name;
  this.age = age;
}

// Add a method dynamically using prototype
Student.prototype.display = function() {
  console.log(`Name: ${this.name}, Age: ${this.age}`);
};

// Create student objects
let s1 = new Student("Lakshman", 20);
let s2 = new Student("Anita", 22);

// Call the prototype method
s1.display();
s2.display();

// Dynamically add another method later
Student.prototype.greet = function() {
  console.log(`Hello, ${this.name}! Welcome to the class.`);
};

// Now all Studen
