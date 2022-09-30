function getRandom(min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  //формула расчета взята с сайта https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  return Math.round(Math.random() * (max - min) + min);
}

getRandom(1, 10);

function validateStringLength(string, maxLength) {
  return string.length < maxLength;
}

validateStringLength('hello, World!', 55);

