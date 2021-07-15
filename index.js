var input = document.querySelector('input');
var paragraph = document.querySelector('p');

input.addEventListener('click', buttonClicked);

function buttonClicked() {
    paragraph.textContent = "The machine started.";
}
