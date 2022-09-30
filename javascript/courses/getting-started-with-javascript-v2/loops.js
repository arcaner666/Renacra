var students = ["Ahmet", "Mehmet", "Veli"];
// FOR DÖNGÜSÜ KULLANIM 1
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
// FOR DÖNGÜSÜ KULLANIM 2
for (student of students) {
    console.log(student);
}
// WHILE DÖNGÜSÜ
while (students.length > 0) {
    let student = students.pop();
    console.log(students);
}
