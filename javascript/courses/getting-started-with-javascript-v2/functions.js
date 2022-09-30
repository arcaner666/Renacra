var students = ["Ahmet", "Mehmet", "Veli"];
// PROSEDÜR
function greetStudents(students) {
    for (student of students) {
        console.log(`Merhaba, ${student}`);
    }
}
greetStudents(students);

// FONKSİYON
function timeRemaining(timeElapsed, endTime) {
    return endTime - timeElapsed;
}
var left = timeRemaining(42, 240);
console.log(left);