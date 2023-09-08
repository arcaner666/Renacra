// ÖRNEK 1
function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 2000);
}
ask("What is closure?");

// ÖRNEK 2
function ask(question) {
    return function holdYourQuestion() {
        console.log(question);
    }
}
var myQuestion = ask("What is closure?");
myQuestion();