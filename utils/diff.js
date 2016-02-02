require('colors');
const diff = require('diff');

module.exports = function (solution, attempt) {
  // Compare solution and attempt results
  const parts = diff.diffChars(solution, attempt);
  // return diff
  return parts.map( part =>
    part.added   ? part.value['red'] :
    part.removed ? part.value['green'] : part.value
  ).join('');
}
