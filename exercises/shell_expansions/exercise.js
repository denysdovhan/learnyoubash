module.exports = require('../../utils/problem')(__dirname, () => {
  const random = () => Math.ceil(Math.random() * 10);

  return [
    random(),
    random(),
    random(),
  ];
});
