// Run by Node.js
// 은행 예금 이자 구하기
// node second.js 해보면 input output이 어떻게 되는지 알 수 있음

// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	
	const arr=line.split(' ');

	const origin=parseInt(arr[0]);
	const rate=parseFloat(arr[1])*0.01;
	const years=parseInt(arr[2]);
	
	console.log((origin*(1+rate)**years).toFixed(2));
	
	rl.close();
}).on("close", function() {
	process.exit();
});