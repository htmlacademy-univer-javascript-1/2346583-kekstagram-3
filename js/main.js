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
