import { createPhoto } from "./data.js";
import { displayData } from "./displayData.js";
import { loadPictures } from "./api.js";
import './uploadPicture.js';

const photos = Array.from({length: 25}, createPhoto);


loadPictures(
  (photos) => {
    displayData(photos);
  },
  () => {
    showErrorMessage();
  }
);

submitForm(closeEditor);
