const path = require('path');
const execute = require('./execute');
const diff = require('./diff');

"use strict";

module.exports = (dirname) => ({

  init: function (workshopper) {
    this.problem =
      { file: path.join(dirname, `problem.{lang}.md`) };
    this.solution =
      { file: path.join(dirname, `solution`, `solution.{lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, `solution`, `solution.bash`);
  },

  verify: function (args, done) {
    execute(args, false, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }
      if (stderr.toString() !== '') {
        process.stdout.write(`Bash Syntax Error:`);
        process.stdout.write(stderr.toString());
        return done(false);
      }

      args[0] = this.solutionPath;
      execute(args, false, (_err, _stdio, _stdout, _stderr, _code) => {
        if (_err) { return done(_err, false); }
        if (stdout.toString() !== _stdout.toString()) {
          process.stdout.write(
            diff(stdout.toString(), _stdout.toString())
          );
          return done(false);
        }
        done(true);
      });
    });
  },

  run: function (args, done) {
    execute(args, true, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }
      done();
    });
  }

});
