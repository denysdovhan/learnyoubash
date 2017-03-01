'use strict';

module.exports = require('../../utils/problem')(__dirname, () => {

  const random = () => Math.ceil(Math.random() * 1000);

  let args = [];
  for (let i = 0; i < 10; i++) {
    args.push(random());
  }

  return args;
});
