const path = require('path');
const execute = require('./execute');

"use strict";

module.exports = dirname => ({

  init: function (workshopper) {
    this.problem = { file: path.join(dirname, `problem.{lang}.md`) };
  },

  verify: function (args, done) {
    execute(args, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }
      if (stderr.toString() !== '') {
        console.error(`Bash Syntax Error:`);
        console.error(stderr.toString());
        return done(false);
      }
      console.log(stdio.toString());
      done(true);
    });
  },

  run: function (args, done) {
    execute(args, (err, stdio, stdout, stderr, code) => {
      if (err) {
        done(err, false);
      }
      console.log(stdio.toString());
      done()
    });
  }
});
