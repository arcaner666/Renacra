// String Concatenation (number to string) / String Birleştirme (sayıyı stringe çevirme)
var msg1 = "There are ";
var numStudents = 16;
var msg2 = " students.";
console.log(msg1 + numStudents + msg2);

// String To Number / String'i Sayıya Çevirme
var students = "2";
function addAStudent(students) {
    return students + 1;
}
addAStudent(Number(students.value));
console.log(students);