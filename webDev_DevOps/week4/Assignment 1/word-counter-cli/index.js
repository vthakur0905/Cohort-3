
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .argument('<filePath>', 'path to the file')
  .action((filePath) => {
  
    const resolvedPath = path.resolve(filePath);

    // Read the file asynchronously
    fs.readFile(resolvedPath, 'utf8', (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
        process.exit(1);
      }

      // Count the words by splitting on spaces, newlines, etc.
      const wordCount = data.split(/\s+/).filter(Boolean).length;

      console.log(`You have ${wordCount} words in this file`);
    });
  });


program.parse(process.argv);
