const createPicturePreview = (url, description) => {
  const picturePreveiw= document.createElement('img');

  picturePreveiw.classList.add('picture__img');
  picturePreveiw.setAttribute('src', url);
  picturePreveiw.setAttribute('width', 182);
  picturePreveiw.setAttribute('height', 182);
  picturePreveiw.setAttribute('alt', description);

  return picturePreveiw;
}

const createPictureElements = (comments, likes) => {

  const commentCount = document.createElement('span');
  commentCount.classList.add('picture__comments');
  commentCount.append(comments);

  const likeCount = document.createElement('span');
  likeCount.classList.add('picture__likes');
  likeCount.append(likes);

  return(commentCount, likeCount);
}

const createPictureFromData = ({url, description, comments, likes}) => {
  const pictureDetailLink = document.createElement('a');
  pictureDetailLink.setAttribute('href', '#');
  pictureDetailLink.classList.add('picture');

  const picturePreveiw = createPicturePreview(url, description);

  const pictureInfoContainer = document.createElement('p');
  pictureInfoContainer.classList.add('picture__info');
  pictureInfoContainer.append(createPictureElements(comments, likes));

  pictureDetailLink.append(picturePreveiw, pictureInfoContainer);
}



export const displayData = (data) => {
  var fragment = new DocumentFragment();

  fragment = data.map((picture) => {createPictureFromData(picture)});

  const container = document.querySelector('.pictures');
  container.appendChild(fragment);
}


