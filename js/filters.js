const ANY_CHOICE_FILTERS = 'any';

const filterByType = (value, type) => {
  if (type === ANY_CHOICE_FILTERS || value.offer.type === type) {
    return true;
  } else {
    return false;
  }
};

export {filterByType};
