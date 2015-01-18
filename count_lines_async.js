var fs = require("fs");

fs.readFile(process.argv[2], function(err, linesFromFile){
	
	/*if !err
	{
		console.log(err.msg);
	}*/
	//console.log(linesFromFile.toString().split('\n').length() - 1);
	console.log(linesFromFile.toString().split("\n").length - 1);
});