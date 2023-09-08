var person = {};
person.name = "Mrs. White";
var who = person.name;
person.name = "Mr. White";
console.log(who);
console.log(person.name);