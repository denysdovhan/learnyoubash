module.exports = require('../../utils/problem')(__dirname, () => {
  const random = (min, max) =>
    Math.floor(Math.random() * ((max - min) + 1)) + min;

  return [
    random(0, 50),
    random(50, 100),
  ];
});
