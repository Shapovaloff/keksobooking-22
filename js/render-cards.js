const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeatures = (element, array) => {
  element.innerHTML = '';
  const newFeaturesFragment = document.createDocumentFragment();
  array.forEach((value) => {
    const newFeaturesItem = document.createElement('li');
    newFeaturesItem.classList.add('popup__feature');
    newFeaturesItem.classList.add(`popup__feature--${value}`);
    newFeaturesFragment.appendChild(newFeaturesItem)
  });

  return newFeaturesFragment;
}

const renerPhotos = (element, array) => {
  element.innerHTML = '';
  const newPhotosFragment = document.createDocumentFragment();
  array.forEach((value) => {
    const newPhotoItem = document.createElement('img');
    newPhotoItem.classList.add('popup__photo');
    newPhotoItem.width = '45';
    newPhotoItem.height = '40';
    newPhotoItem.src = value;
    newPhotoItem.alt = 'Фотография жилья';
    newPhotosFragment.appendChild(newPhotoItem);
  });

  return newPhotosFragment;
}

const renderCard = ({author, offer}) => {
  const element = cardTemplate.cloneNode(true);
  element.querySelector('.popup__avatar').src = author.avatar;
  element.querySelector('.popup__title').textContent = offer.title;
  element.querySelector('.popup__text--address').textContent = offer.address;
  element.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  element.querySelector('.popup__type').textContent = offer.type;
  element.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
  element.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

  const popupFeatures = element.querySelector('.popup__features');

  if (Array.isArray(offer.features) && offer.features.length) {
    popupFeatures.appendChild(renderFeatures(popupFeatures, offer.features));
  } else {
    popupFeatures.remove();
  }

  element.querySelector('.popup__description').textContent = offer.description;

  const popupPhotos = element.querySelector('.popup__photos');
  if (Array.isArray(offer.photos) && offer.photos.length) {
    popupPhotos.appendChild(renerPhotos(popupPhotos, offer.photos))
  } else {
    popupPhotos.remove();
  }

  return element;
};

export {renderCard};
