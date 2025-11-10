class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  // Method to display student details
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

// Create 3 Student objects
const student1 = new Student("Arun", 20, "A");
const student2 = new Student("Meena", 19, "B");
const student3 = new Student("Kiran", 21, "A+");

// Display their details
student1.display();
student2.display();
student3.display();
