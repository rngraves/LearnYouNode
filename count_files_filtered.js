var fs = require("fs");
var path = require("path");
var fullExtension;

fs.readdir(process.argv[2], function(err, lstFiles){
	
	// if err
	// {
	// 	console.log(err.msg);
	// }

	fullExtension = "." + process.argv[3];
	//loop through the list of files and check if the extension matches the filtered extension
	for(i = 0; i < lstFiles.length - 1; i++)
	{
		
		if (fullExtension === path.extname(lstFiles[i]))
		{
			console.log(lstFiles[i]);
		}
	}
	
	
});