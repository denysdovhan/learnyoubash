'use strict';

module.exports = require('../../utils/problem')(__dirname, () => {

  const random = () => Math.ceil(Math.random() * 10) > 5 ? true : false;

  return [
    random(),
    random(),
    random(),
  ];
});
