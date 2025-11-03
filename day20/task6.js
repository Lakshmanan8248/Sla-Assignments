function getGrade(marks) {
  if (marks >= 80) {
    return "A";
  } else if (marks >= 60) {
    return "B";
  } else {
    return "C";
  }
}


console.log(getGrade(85)); 
console.log(getGrade(70)); 
console.log(getGrade(50)); 
