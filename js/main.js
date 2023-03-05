function getRandomInt(min, max) { //from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  if (min > max){
    let t = min;
    min = max;
    max = t;
  }
  if (min == max) return min;
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkLength(string, length){
  length = Math.round(Number(length));
  string = String(string);
  if (string.length <= length && length >= 0) return true;
  return false;
}
