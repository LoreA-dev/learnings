const countFromToArray = (start, end) => {
  const result = [];
  for (let index = start; index < end; index++) {
    result.push(index);
  }
  return result;
};

const bingoConfigs = {
  B: { limit: 15 },
  I: { limit: 30 },
  N: { limit: 45 },
  G: { limit: 60 },
  O: { limit: 75 },
};

const getPossibleValues = (letter) => {
  //checking inside of current status
  const start = bingoConfigs[letter].limit - 14,
    end = bingoConfigs[letter].limit + 1;
  const completeLetterNumberList = countFromToArray(start, end);
  return completeLetterNumberList;
};

function suffleArray(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default {
  getPossibleValues,
  suffleArray,
  countFromToArray,
};
