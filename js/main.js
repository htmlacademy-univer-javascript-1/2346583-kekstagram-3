function getRandomInt(min, max) { //from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  if (min > max || min < 0 || max < 0){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) { return min; }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLength(string, length) {
  length = Number(length);
  string = String(string);
  if (length < 0) return 0;
  return string.length <= length;
}

let usedIDs = [];

const createPhoto = () => {
  let i = getRandomInt(1, 25);
  while (usedIDs.indexOf(i) != -1) {
    i = getRandomInt(1, 25);
  }
  usedIDs.push(i);
  return {
    id: i,
    url: "photos/${i}.jpg",
    description: "Photo number ${i}",
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200),
  }
}

const photos = Array.from({length: 25}, createPhoto);
