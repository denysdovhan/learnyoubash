module.exports = require('../../utils/problem')(__dirname, () => {
  "use strict";

  const random = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  let args = [];
  for (let i = 0; i < random(1, 20); i++) {
    args.push(`file${random((i * 100), (i * 100) + 100)}`)
  }

  return args;
});
