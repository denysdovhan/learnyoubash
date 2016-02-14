const fs = require('fs');

module.exports = function troubleshooting(path, data) {
  return fs.readFileSync(path, 'utf8')
    // Replace breaking characters
    .replace(/&#39;/g,  "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g,   '<')
    .replace(/&gt;/g,   '>')
    // Inject data
    .replace(/%solution%/g, data.solution)
    .replace(/%attempt%/g,  data.attempt)
    .replace(/%diff%/g,     data.diff)
    .replace(/%filename%/,  data.filename)
};
