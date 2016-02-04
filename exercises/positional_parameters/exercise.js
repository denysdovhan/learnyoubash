module.exports = require('../../utils/problem')(__dirname, () => {

  "use strict";

  // Random number
  const random = () => Math.ceil(Math.random() * 1000);

  let args = [];
  for (let i = 0; i < 10; i++) {
    args.push(random());
  }

  return args;
});
