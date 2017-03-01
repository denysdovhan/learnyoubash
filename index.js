const workshopper = require('workshopper-adventure');
const path = require('path');

const learnyoubash = workshopper({
  appDir: __dirname,
  languages: ['en', 'uk'],
  header: require('workshopper-adventure/default/header'),
  footer: [{
    file: path.join(__dirname, 'i18n', 'footer', '{lang}.md'),
  }],
});

learnyoubash.addAll([
  'HELLO WORLD',
  'VARIABLES',
  'POSITIONAL PARAMETERS',
  'ARRAYS',
  'SHELL EXPANSIONS',
  'STREAMS PIPES AND LISTS',
  'IF CONDITIONAL STATEMENT',
  'CASE CONDITIONAL STATEMENT',
  'LOOPS',
  'FUNCTIONS',
  'DEBUGGING',
]);

module.exports = learnyoubash;
