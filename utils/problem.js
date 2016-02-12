const path = require('path');
const execute = require('./execute');
const diff = require('./diff');

"use strict";

module.exports = (dirname, getArgs) => ({

  init: function (workshopper) {
    this.problem =
      { file: path.join(dirname, `problem.{lang}.md`) };
    this.solution =
      { file: path.join(dirname, `solution`, `solution.{lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, `solution`, `solution.bash`);
  },

  verify: function (args, done) {
    // Get argumetns which will be passed into script
    if (getArgs) { args = args.concat(getArgs()); }

    // Execute attempt
    execute(args, false, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }

      // Execute solution
      args[0] = this.solutionPath;
      execute(args, false, (_err, _stdio, _stdout, _stderr, _code) => {
        if (_err) { return done(_err, false); }
        if (stdio.toString() !== _stdio.toString()) {
          process.stdout.write('\nDiff:\n');
          process.stdout.write( diff(stdio.toString(), _stdio.toString()) );
          return done(false);
        }
        done(true);
      });
    });
  },

  run: function (args, done) {
    // Get argumetns which will be passed into script
    if (getArgs) { args = args.concat(getArgs()); }

    execute(args, true, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }
      done();
    });
  }

});
