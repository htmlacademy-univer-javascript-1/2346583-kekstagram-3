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
    url: "photos/${i}.jpg",
    description: "Photo number ${i}",
    likes: getRandomInt(15, 200),
    comments: getRandomInt(0, 200),
  };
}
