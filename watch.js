var fs = require('fs');
fs.watch('./init.config.js', {encoding: 'buffer'}, (event, filename) => {
  if (filename)
    console.log(filename);
    // Prints: <Buffer ...>
});