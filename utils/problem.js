const path            = require('path');
const troubleshooting = require('./troubleshooting');
const execute         = require('./execute');
const diff            = require('./diff');

module.exports = (dirname, getArgs) => {

  "use strict";

  const exports = {};

  exports.init = function (workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `problem.${lang}.md`) };
    this.solution =
      { file: path.join(dirname, `solution`, `solution.${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, `solution`, `solution.bash`);
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`)
  };

  exports.verify = function (args, done) {
    // Attempt filename
    const filename = args[0];

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

          exports.fail = [
            {
              text: troubleshooting(this.troubleshooting, {
                solution: _stdio.toString(),
                attempt:   stdio.toString(),
                diff:      diff(stdio.toString(), _stdio.toString()),
                filename:  filename
              }),
              type: 'md'
            },
            { text: '---', type: 'md' },
            { file: path.join(__dirname, '..', 'i18n', 'footer', '{lang}.md') }
          ];

          return done(false);
        }
        done(true);
      });
    });
  };

  exports.run = function (args, done) {
    // Get argumetns which will be passed into script
    if (getArgs) { args = args.concat(getArgs()); }

    execute(args, true, (err, stdio, stdout, stderr, code) => {
      if (err) { return done(err, false); }
      done();
    });
  };

  return exports;
};
