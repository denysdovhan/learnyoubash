const path = require('path');
const format = require('./format-file');

module.exports = function fail({
  filename,
  attempt,
  solution,
  troubleshooting,
}) {
  return [{
    text: format(troubleshooting, { filename, solution, attempt }),
    type: 'md',
  }, {
    text: '---',
    type: 'md',
  }, {
    file: path.join(__dirname, '..', 'i18n', 'footer', '{lang}.md'),
  }];
};
