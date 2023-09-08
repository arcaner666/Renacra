var person = [];
person.name = "Mrs. White";
var who = person.name;
person.name = "Mr. White";
console.log(who);
console.log(person.name);
console.log(typeof person === "array");
console.log(typeof person === "object");