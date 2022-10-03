function getRandom(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  //формула расчета взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.round(Math.random() * (max - min) + min);
}

function validateStringLength(string, maxLength) {
  return string.length < maxLength;
}

validateStringLength('hello, World!', 55);

const ADJECTIVE = [
  'beautiful',
  'wonderful',
  'sweet',
  'impossible',
  'creative',
  'sexy',
];

const NOUN = [
  'cat',
  'place',
  'trip',
  'human',
  'food',
  'girl',
];

function getRandomWord(array) {
  return array[getRandom(0, array.length - 1)];
}

function createPhoto(id) {
  return {
    id,
    url: `photos/${id}.jpg`,
    description: `${getRandomWord(ADJECTIVE)} ${getRandomWord(NOUN)}`,
    likes: getRandom(15, 200),
    comments: getRandom(0, 200),
  };
}

function generatePhotosArray(count) {
  return Array.from({length: count}, (el, index) => createPhoto(index + 1));
}

generatePhotosArray(25);
