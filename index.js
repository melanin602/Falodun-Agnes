let students = [
  { name: "Bola Joe", score: 80 },
  { name: "Bolu Moa", score: 40 },
  { name: "Simi Tola", score: 70 },
  { name: "Eliana Anan", score: 90 },
  { name: "Elvis Key", score: 30 },
];

map()
let studentNames = students.map( function(studentNames) {
  return studentNames
});
console.log("StudentNames");

filter()
let passedStudents = students.filter( function(student) {
  return student.score >= 50;
})
console.log("Passed Students:");

reduce()
let averageScore = students.reduce( function(total, student) {
  return total + student.score, students.length;
},0)
console.log("Average Score:", );

loop
for (let i = 0; i < students.length; i++) {
  console.log (Studentscore + i);
}
  let grade;

  ifelse 

  if (student.score >= 80) {
    console.log(grade = "A");
  } else if (student.score >= 70) {
    console.log (grade = "B");
  } else if (student.score >= 60) {
    console.log (grade = "C");
  } else if (student.score >= 50) {
    console.log (grade = "D");
  } else {
    console.log( grade ="F");
  }

 



