module.exports = require('../../utils/problem')(__dirname, () => {
  const random = (min, max) =>
    Math.floor(Math.random() * ((max - min) + 1)) + min;

  const args = [];
  for (let i = 0; i < random(1, 20); i += 1) {
    args.push(`file${random((i * 100), (i * 100) + 100)}`);
  }

  return args;
});
