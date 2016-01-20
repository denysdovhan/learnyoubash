// const filecheck = require('workshopper-exercise/filecheck');
// const execute = require('workshopper-exercise/execute');
// const comparestdout = require('workshopper-exercise/comparestdout');


// checks that the submission file actually exists
// exercise = filecheck(exercise)

// execute the solution and submission in parallel with spawn()
// exercise = execute(exercise)

// compare stdout of solution and submission
// exercise = comparestdout(exercise)

const path = require('path')

module.exports = {
  // Done automatically by workshopper-exercise:
  // https://github.com/workshopper/workshopper-exercise/blob/7d45a93451af944b1653943e6f6af28ddd0a676a/exercise.js#L195
  problem: {file: path.join(__dirname, 'problem.{lang}.md')},

  // Signuature has to follow
  // https://github.com/workshopper/workshopper-adventure/blob/1c49e02aef950f62a5c72eb48bd451c2f5076219/index.js#L316
  verify: function (args) {
    console.log('verify', args)
  },
  run: function (args) {
    console.log(args)
  }
}
