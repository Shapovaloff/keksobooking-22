const getRandomInt = (min, max) => {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон значений должен быть больше или равен 0');
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomFloat = (min, max, decimal) => {
  if (min < 0 || max < 0) {
    throw new Error('Диапазон значений должен быть больше или равен 0');
  }

  if (min > max) {
    [min, max] = [max, min];
  }

  return Number(Math.random() * (max - min) + min).toFixed(decimal);
}

const getCoordinate = (coordinates) => {
  return {
    x: getRandomFloat(coordinates.X_MIN, coordinates.X_MAX, coordinates.precision),
    y: getRandomFloat(coordinates.Y_MIN, coordinates.Y_MAX, coordinates.precision),
  };
};

const getRandomArrayElement = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Передаваемые данные должны быть массивом');
  }

  return arr[getRandomInt(0, arr.length - 1)];
}

const getRandomArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('Передаваемое значение не является массивом');
  }

  return arr.filter(() => Math.random() > 0.5);
};


export {getRandomInt, getRandomFloat, getCoordinate, getRandomArrayElement, getRandomArray}
