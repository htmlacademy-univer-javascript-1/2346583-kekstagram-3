import {pristine} from "./validation.js";
const pictureUploadForm = document.querySelector('#upload-select-image');
const preview = document.querySelector('.img-upload__preview img');
const pictureUploadOverlay = pictureUploadForm.querySelector('.img-upload__overlay');
var onEditorEscKeydown;
const pictureInput = pictureUploadForm.querySelector('#upload-file');
const overlayCloseButton = pictureUploadForm.querySelector('#upload-cancel');
const effects = editor.querySelector('.effects__list');
const scaleSmallerButton = editor.querySelector('.scale__control--smaller');
const scaleBiggerButton = editor.querySelector('.scale__control--bigger');

function closeImageUploadModal() {
  pictureUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  pictureUploadForm.reset();
}

// show modal (when image uploaded)
pictureInput.addEventListener('change', function(evt) {
  pictureUploadOverlay.classList.toggle('hidden');
  document.body.classList.toggle('modal-open');
  const uploadedImage =  document.querySelector('#upload-file').files[0];

  const fileReader = new FileReader();
  createSlider();

  fileReader.onloadend = function() {
    preview.src = fileReader.result;
  };
  fileReader.readAsDataURL(uploadedImage);

  onEditorEscKeydown = escKeydownHandler(document, closeEditor);
  effects.addEventListener('change', onEffectButtonClick);
  scaleSmallerButton.addEventListener('click', onControlSmallerButtonClick);
  scaleBiggerButton.addEventListener('click', onControlBiggerButtonClick);
});

// close modal
overlayCloseButton.addEventListener('click', function(evt) {
  closeImageUploadModal();
  pristine.reset();
});
document.addEventListener('keydown', function(evt) {
  if (evt.key == "Escape") closeImageUploadModal();
  pristine.reset();
})

pictureUploadForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  pictureUploadForm.submit();
  closeImageUploadModal();
});
