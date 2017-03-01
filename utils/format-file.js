const fs = require('fs');
const diff = require('./diff');

module.exports = function formatFile(path, { filename, attempt, solution }) {
  return fs.readFileSync(path, 'utf8')
    // Replace breaking characters
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    // Inject data
    .replace(/%solution%/g, solution)
    .replace(/%attempt%/g, attempt)
    .replace(/%diff%/g, diff(attempt, solution))
    .replace(/%filename%/, filename);
};
