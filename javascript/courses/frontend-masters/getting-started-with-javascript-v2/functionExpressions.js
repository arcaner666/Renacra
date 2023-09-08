// Anonymous Function Expressions
var clickHandler = function() {
    //..
}

// Named Function Expressions
var keyHandler = function keyHandler() {
    //..
}

// ÖNERİLMEYEN KULLANIM
var ids = people.map(person => person.id);

// ÖNERİLEN KULLANIM
var ids = people.map(function getId(person) {
    return person.id;
});

// Immediately Invoked Function Expressions
var teacher = "Kyle";
( function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);
});
console.log(teacher);

