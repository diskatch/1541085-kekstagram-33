//Функция дает случайное число
const getRandomInteger = (minNumber, maxNumber) => {
  const minValue = Math.ceil(Math.min(Math.abs(minNumber), Math.abs(maxNumber)));
  const maxValue = Math.floor(Math.max(Math.abs(minNumber), Math.abs(maxNumber)));
  return Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
};


//Функция дает уникальное число
const getUniqueNumber = () => {
  let number = 1;
  return function () {
    return number++;
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';

export { getRandomInteger, getUniqueNumber, isEscapeKey };
