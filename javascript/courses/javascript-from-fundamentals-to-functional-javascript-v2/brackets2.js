// Yanlış Kullanım
// var person = [];
// person.name = "Mrs. White";
// person[plea] = "I would never!";
// console.log(person);
// console.log(person[plea]);

// Doğru Kullanım
var person = [];
var plea = "whouldShe";
person.name = "Mrs. White";
person[plea] = "I would never!";
person["gender"] = "Male";
console.log(person);
console.log(person[plea]);
console.log(person["gender"]);