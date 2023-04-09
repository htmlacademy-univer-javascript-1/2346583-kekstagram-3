export function getRandomInt(min, max) { //from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
  if (min > max || min < 0 || max < 0){
    return 0;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function checkLength(string, length) {
  length = Number(length);
  string = String(string);
  if (length < 0) {
    return 0;
  }
  return string.length <= length;
}

export function escKeydownHandler(element, onKeydownFunction) {
  function eventHandler(evt) {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      onKeydownFunction();
    }
  }
  element.addEventListener('keydown', eventHandler);

  return eventHandler;
}

export function anotherAreaClickHandler(element, selector, onClickFunction) {
  function eventHandler(evt) {
    if (evt.target === document.querySelector(selector)) {
      onClickFunction();
    }
  }
  element.addEventListener('click', eventHandler);

  return eventHandler;
}

