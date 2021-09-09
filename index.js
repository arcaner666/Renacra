const constructArr = function () {
  const arr = Array.prototype.slice.call(arguments);
  return arr;
};
console.log(constructArr("was", "it", "in"));
