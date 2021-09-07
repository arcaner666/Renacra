function CreateSuspectObjects(name) {
    return {
        name: name,
        color: name.split(' ')[1],
        speak(){
            console.log("My name is ", name);
        }
    };
};
var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];
var suspectsList = [];
suspects.forEach(element => {
    suspectsList.push(CreateSuspectObjects(element));
});
suspectsList[0].speak();
suspectsList[1].speak();
suspectsList[2].speak();