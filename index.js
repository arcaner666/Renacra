// var workshop = {
//   teacher: "Kyle",
//   ask(question) {
//     console.log(this.teacher, "question");
//   },
// };

var workshop = function () {
  teacher = "Kyle";
  return function ask() {
    console.log(this.teacher, "question");
  };
};
workshop("Normal Calling");
setTimeout(ask(), 1000, "Lost this?");
setTimeout(ask.bind(workshop), 2000, "Hard bound this?");
