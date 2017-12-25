const path = require('path');
const execute = require('./execute');
const fail = require('./fail');

module.exports = (dirname, getArgs) => {
  const exports = {};

  exports.init = function init(workshopper) {
    // Get lang code
    const lang = workshopper.i18n.lang();

    this.problem =
      { file: path.join(dirname, `problem.${lang}.md`) };
    this.solutionPath =
      path.resolve(dirname, 'solution', 'solution.bash');
    this.solution = [
      { file: this.solutionPath },
      { file: path.join(dirname, 'solution', `solution.${lang}.md`) },
    ];
    this.troubleshooting =
      path.join(__dirname, '..', 'i18n', 'troubleshooting', `${lang}.md`);
  };

  exports.verify = function verify([filename, args = []], done) {
    // Get argumetns which will be passed into script
    if (getArgs) {
      // eslint-disable-next-line
      args = args.concat(getArgs());
    }

    Promise.all([
      execute([filename, ...args], false),
      execute([this.solutionPath, ...args], false),
    ])
      .then(([attemptObj, solutionObj]) => {
        const attempt = attemptObj.stdio.toString();
        const solution = solutionObj.stdio.toString();

        if (attempt !== solution) {
          exports.fail = fail({
            filename,
            attempt,
            solution,
            troubleshooting: this.troubleshooting,
          });

          return done(false);
        }
        return done(true);
      })
      .catch(reason => done(reason, false));
  };

  exports.run = function run([filename, args = []], done) {
    // Get argumetns which will be passed into script
    if (getArgs) {
      // eslint-disable-next-line
      args = args.concat(getArgs());
    }

    execute([filename, ...args], true)
      .then(() => done())
      .catch(reason => done(reason, false));
  };

  return exports;
};
