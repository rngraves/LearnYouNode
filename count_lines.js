var fs = require('fs');
var buffer;
var arrLines;
buffer = fs.readFileSync(process.argv[2]);
arrLines = buffer.split('/n');
console.log(arrLines.length - 1);