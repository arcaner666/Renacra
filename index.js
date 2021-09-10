const newClue = (name) => {
  const length = name.length;
  return (weapon) => {
    let clue = length + weapon.length;
    return !!(clue % 1);
  };
};
const funcNew = newClue("Caner");
console.log(funcNew("sword"));
