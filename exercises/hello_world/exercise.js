const path = require('path')
const spawn = require('child_process').spawn;

module.exports = {

  init: function (workshopper) {
    const lang = workshopper.i18n.lang() !== 'en'
               ? '.' + workshopper.i18n.lang()
               : '';
    this.problem = { file: path.join(__dirname, `problem${lang}.md`) };
  },

  verify: function (args, done) {
    const file = args[0];
    const test = spawn(path.join(process.cwd(), file));

    const expected = `Hello, world!`

    test.stdout.on('data', (data) => {
      const actual = data.toString().trim();
      if (actual === expected) {
        done(true);
      } else {
        console.log(`Your script should return: ${expected}`);
        console.log(`Instead of: ${actual}`);
        done(false);
      }
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
}
