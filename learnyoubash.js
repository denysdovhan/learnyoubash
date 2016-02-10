const workshopper = require('workshopper-adventure');

learnyoubash = workshopper({
    appDir      : __dirname
  , languages   : ['en']
  , header      : require('workshopper-adventure/default/header')
  , footer      : require('workshopper-adventure/default/footer')
});

learnyoubash.addAll([
  "HELLO WORLD",
  "VARIABLES",
  "POSITIONAL PARAMETERS",
  "ARRAYS",
  "SHELL EXPANSIONS",
  "STREAMS PIPES AND LISTS",
  "IF CONDITIONAL STATEMENT",
  "CASE CONDITIONAL STATEMENT",
  "LOOPS"
]);

module.exports = learnyoubash;
