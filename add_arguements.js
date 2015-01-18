var totalArgumentSum = 0;

for(i=2; i<process.argv.length; i++){
	totalArgumentSum = +process.argv[i] + totalArgumentSum;
}

console.log(totalArgumentSum);