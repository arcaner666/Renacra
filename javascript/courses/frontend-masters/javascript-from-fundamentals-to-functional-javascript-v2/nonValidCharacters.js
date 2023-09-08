var box = {};
box['material'] = "cardboard";
box[0] = 'meow';
box[2 + 2] = 'evaluated value';
box['^&*'] = "testing 123";
console.log(box);

box = {
    material: "cardboard",
    0: "meow",
    "^&*": "testing 123"
};
console.log(box);