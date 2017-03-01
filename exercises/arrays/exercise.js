'use strict';

module.exports = require('../../utils/problem')(__dirname, () => {

  const templates = [
    'intelligent', 'handsome', 'awesome',
    'perfect', 'clever', 'pretty', 'lovely',
    'strong', 'nice', 'cute', 'funny',
    'cool', 'potential', 'brilliant',
  ];

  const random = () => Math.ceil(Math.random() * 13);

  let args = [];
  for (let i = 0; i < 5; i++) {
    args.push(templates[random()]);
  }

  return args;
});
