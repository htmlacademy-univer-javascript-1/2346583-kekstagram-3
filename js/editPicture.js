import {escKeydownHandler} from './util.js';
import {pristine} from './validation.js';
import {onEffectButtonClick, setEffect, createSlider, destroySlider} from './effects-setting.js';

const preview = document.querySelector('.img-upload__preview img');
const valueField = document.querySelector('.scale__control--value');

export const onControlSmallerButtonClick = () => {
  let percent = valueField.value;
  percent = parseInt(percent.slice(0, -1), 10) - 25;

  if (percent >= 25) {
    setPictureScale(percent);
    valueField.value = `${percent}%`;
  } else {
    valueField.value = '25%';
  }
};

export const onControlBiggerButtonClick = () => {
  let percent = valueField.value;
  percent = parseInt(percent.slice(0, -1), 10) + 25;

  if (percent <= 100) {
    setPictureScale(percent);
    valueField.value = `${percent}%`;
  } else {
    valueField.value = '100%';
  }
};

export function setPictureScale(value) {
  preview.style.transform = `scale(${value/100})`;
}



let onEditorEscKeydown;
const body = document.querySelector('body');
const form = body.querySelector('#upload-select-image');
const editor = form.querySelector('.img-upload__overlay');
const uploadButton = form.querySelector('#upload-file');
const scaleSmallerButton = editor.querySelector('.scale__control--smaller');
const scaleBiggerButton = editor.querySelector('.scale__control--bigger');
const effects = editor.querySelector('.effects__list');
const closeEditorButton = editor.querySelector('#upload-cancel');

export function openEditor() {
  const uploadedImage =  document.querySelector('#upload-file').files[0];
  const fileReader = new FileReader();
  createSlider();

  body.classList.add('modal-open');
  editor.classList.remove('hidden');

  fileReader.onloadend = function() {
    preview.src = fileReader.result;
  };
  fileReader.readAsDataURL(uploadedImage);

  onEditorEscKeydown = escKeydownHandler(document, closeEditor);
  effects.addEventListener('change', onEffectButtonClick);
  scaleSmallerButton.addEventListener('click', onControlSmallerButtonClick);
  scaleBiggerButton.addEventListener('click', onControlBiggerButtonClick);
  closeEditorButton.addEventListener('click', closeEditor);
}

export function closeEditor() {
  destroySlider();
  setEffect('none');
  setPictureScale(100);

  body.classList.remove('modal-open');
  editor.classList.add('hidden');
  preview.className = '';

  document.removeEventListener('keydown', onEditorEscKeydown);
  effects.removeEventListener('change', onEffectButtonClick);
  scaleSmallerButton.removeEventListener('click', onControlSmallerButtonClick);
  scaleBiggerButton.removeEventListener('click', onControlBiggerButtonClick);
  closeEditorButton.removeEventListener('click', closeEditor);
  form.reset();
  pristine.reset();
}

uploadButton.addEventListener('change', openEditor);
