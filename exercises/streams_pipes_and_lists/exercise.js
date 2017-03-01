module.exports = require('../../utils/problem')(__dirname, () => {
  const random = () => Math.ceil(Math.random() * 10) > 5;

  return [
    random(),
    random(),
    random(),
  ];
});
