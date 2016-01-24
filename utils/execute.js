const spawn = require('child_process').spawn;

"use strict";

module.exports = (args, cb) => {
  const test = spawn('bash', args);

  var stdio  = new Buffer('');
  var stdout = new Buffer('');
  var stderr = new Buffer('');

  test.stdout.on('data', (buf) => {
    stdio  = Buffer.concat([stdio, buf]);
    stdout = Buffer.concat([stdout, buf]);
  });

  test.stderr.on('data', (err) => {
    stdio  = Buffer.concat([stdio, err]);
    stderr = Buffer.concat([stderr, err]);
  });

  test.on('error', (err) => {
    console.error(`Failed to run '${args}'!`);
    cb(err);
  });

  test.on('close', (code) => {
    cb(null, stdio, stdout, stderr, code);
  });
};
