// Base class
class Shape {
  constructor(name) {
    this.name = name;
  }

  display() {
    console.log(`This is a ${this.name}.`);
  }
}

// Subclass
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); // Call parent constructor
    this.radius = radius;
  }

  // Method to calculate area
  area() {
    return Math.PI * this.radius * this.radius;
  }
}
