/* eslint-disable */

require('colors');
const diff = require('diff');

module.exports = (attempt, solution) => {
  // Compare solution and attempt results
  const parts = diff.diffLines(attempt, solution);
  // return diff
  return parts.map(part =>
    part.added   ? part.value.red.inverse :
    part.removed ? part.value.green.inverse : part.value
  ).join('');
};
