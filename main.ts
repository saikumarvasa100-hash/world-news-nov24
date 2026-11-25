// Copy entry.png to the output directory specified by MAKEFUN_OUTPUT_DIR or default to /output
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(path.dirname(__filename), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destinationPath = path.join(outputDir, 'entry.png');

fs.copyFileSync(sourcePath, destinationPath);