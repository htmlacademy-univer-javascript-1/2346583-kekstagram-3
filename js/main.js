import { displayData } from "./displayData.js";
import { loadPictures } from "./api.js";
import { submitForm } from "./validation.js";
import { closeImageUploadModal } from "./uploadPicture.js";
import './uploadPicture.js';


loadPictures(
  (photos) => {
    displayData(photos);
  },
  () => {
    showErrorMessage();
  }
);

submitForm(closeImageUploadModal);
