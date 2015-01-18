// This is a test script for the 3rd lesson of 'learnYouNode'
var fs = require('fs');
var buffer;
var arrLines;
buffer = fs.readFileSync(process.argv[2]);
arrLines = buffer.toString().split('\n');
console.log(arrLines.length - 1);