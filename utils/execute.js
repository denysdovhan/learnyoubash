const { spawn } = require('child_process');

module.exports = (args, silent) => new Promise((resolve, reject) => {
  const test = spawn('bash', args);

  let stdio = new Buffer('');
  let stdout = new Buffer('');
  let stderr = new Buffer('');

  test.stdout.on('data', (buf) => {
    if (silent) {
      process.stdout.write(buf);
    }
    stdio = Buffer.concat([stdio, buf]);
    stdout = Buffer.concat([stdout, buf]);
  });

  test.stderr.on('data', (err) => {
    if (silent) {
      process.stdout.write(err);
    }
    stdio = Buffer.concat([stdio, err]);
    stderr = Buffer.concat([stderr, err]);
  });

  test.on('error', (err) => {
    console.error(`Failed to run '${args}'!`);
    reject(err);
  });

  test.on('close', (code) => {
    resolve({ stdio, stdout, stderr, code });
  });
});
