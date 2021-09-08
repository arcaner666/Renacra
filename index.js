const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const _ = {};

_.filter = function (list, callback) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    if (callback(list[i], i, list) === true) {
      newList.push(list[i]);
    }
  }
  return newList;
};

_.map = function (list, callback) {
  let newList = [];
  for (let i = 0; i < list.length; i++) {
    newList.push(callback(list[i], i, list));
  }
  return newList;
};

const findSuspects = function (value, i, list) {
  return value.present === true;
};

const createNewArray = function (value, i, list) {
  return value.name;
};

const suspects = _.filter(videoData, (suspectObject) => {
  return suspectObject.present;
});
const suspectsNames = _.map(suspects, (suspect) => {
  return suspect.name;
});
console.log(suspectsNames);
