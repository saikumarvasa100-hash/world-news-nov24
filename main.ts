// Copy entry.png to the output directory specified by MAKEFUN_OUTPUT_DIR or default to /output
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(path.dirname(__filename), 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const destinationPath = path.join(outputDir, 'entry.png');

// Guard: ensure source exists before copying
	if (!fs.existsSync(sourcePath)) {
		throw new Error(`Source file not found: ${sourcePath}. Make sure entry.png exists in the same directory as main.ts`);
	}

	// Ensure output directory exists before copying
	fs.mkdirSync(outputDir, { recursive: true });

	fs.copyFileSync(sourcePath, destinationPath);
	console.log(`Copied entry.png to ${destinationPath}`);