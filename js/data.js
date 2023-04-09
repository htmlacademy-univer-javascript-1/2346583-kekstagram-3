import { getRandomInt } from "./util.js";

const usedIDs = [];

export const createPhoto = () => {
  let i = getRandomInt(1, 25);
  while (usedIDs.indexOf(i) !== -1) {
    i = getRandomInt(1, 25);
  };
  usedIDs.push(i);
  return {
    id: i,
    url: `/photos/${i}.jpg`,
    description: `Photo number ${i}`,
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200),
  };
}

export const EFFECTS = {
  none: {
    name: 'none',
    filter: '',
    size: ''
  },
  chrome: {
    name: 'chrome',
    step: 0.1,
    filter: 'grayscale',
    min: 0,
    max: 1,
    size: ''
  },
  sepia: {
    name: 'sepia',
    step: 0.1,
    filter: 'sepia',
    min: 0,
    max: 1,
    size: ''
  },
  marvin: {
    name: 'marvin',
    step: 1,
    filter: 'invert',
    min: 0,
    max: 100,
    size: '%'
  },
  phobos: {
    name: 'phobos',
    step: 0.1,
    filter: 'blur',
    min: 0,
    max: 3,
    size: 'px'
  },
  heat: {
    name: 'heat',
    step: 0.1,
    filter: 'brightness',
    min: 1,
    max: 3,
    size: ''
  }
};
