// Run by Node.js
// 369 게임
// node first.js 해보면 input output이 어떻게 되는지 알 수 있음

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	
	const number=parseInt(line);
	let len=line.length;
	let count=0;
	let i=0;
	let bonus=0;
	let temp=0;
	
	while(len>0){
		
		temp=parseInt(line[i]);

		if (temp<4){
			bonus=0;
		}else if (temp<7){
			bonus=1;
		}else{
			bonus=2;
		}
		
		count+=10**(len-1)*(3*parseInt((number/(10**len)))+bonus);
		
		if(temp===3 || temp===6 || temp===9){
			count+=(line%(10**(len-1))+1);
		}
		
		i++;
		len--;
	}
	
	console.log(count);
	
	rl.close();
}).on("close", function() {
	process.exit();
});