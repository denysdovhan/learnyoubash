module.exports = require('../../utils/problem')(__dirname, () => {
  // Random between [-5..25] for testing time
  const random = () => Math.ceil((Math.random() * 30) - 5);

  return [
    random(),
  ];
});
