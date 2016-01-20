const workshopper = require('workshopper-adventure');
const path        = require('path');

learnyoubash = workshopper({
    title       : 'Learn Bash'
  , subtitle    : 'Bash is awesome!'
  , appDir      : __dirname
  , languages   : ['en']
  , header      : require('workshopper-adventure/default/header')
  , footer      : require('workshopper-adventure/default/footer')
});

learnyoubash.addAll([
  "HELLO WORLD"
]);

module.exports = learnyoubash;
