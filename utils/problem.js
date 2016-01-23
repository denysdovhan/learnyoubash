const path = require('path');
const spawn = require('child_process').spawn;

"use strict";

module.exports = dirname => ({

  init: function (workshopper) {
    this.problem = { file: path.join(dirname, `problem.{lang}.md`) };
  },

  verify: function (args, done) {
    const file = args[0];
    args = args.slice(1);

    const test = spawn(path.join(process.cwd(), file));

    test.stdout.on('data', (data) => {
      console.log(`data: ${data}`);
    });

    test.stderr.on('data', (data) => {
      console.log(data.toString());
      done(false);
    });

    test.on('close', (code) => {
      if (code != 0) {
        console.log(`Your script returns non-zero code: ${code}`);
        done(false);
      }
    });

    test.on('error', (err) => {
      console.log(`Failed to run '${args}'!`);
      console.log(`ERROR: ${err}`);
      done(false);
    });
  },

  run: function (args) {
    const file = args[0];
    const test = spawn(file);

    test.stdout.on('data', (data) => { console.log(data.toString()) });
    test.stderr.on('data', (data) => { console.log(data.toString()) });

    test.on('error', (err) => {
      console.log(`Failed to run '${args}'!`);
      console.log(`ERROR: ${err}`);
      done(false);
    });
  }
});
