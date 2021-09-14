function printHello() {
  console.log("Print Hello!");
}
function blockForOneSecond() {
  console.log("blockForOneSecond");
  console.log("blockForOneSecond");
  console.log("blockForOneSecond");
  console.log("blockForOneSecond");
}
setTimeout(printHello, 0);
blockForOneSecond();
console.log("Me First");
