module.exports = require('../../utils/problem')(__dirname, () => {
  const random = () => Math.ceil(Math.random() * 1000);

  const args = [];
  for (let i = 0; i < 10; i += 1) {
    args.push(random());
  }

  return args;
});
