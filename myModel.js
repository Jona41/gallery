	var name ="junlin";
	function printName(){
		console.log(name);
	}
	function printFullName(firstName){
		console.log(firstName + name);
	}
	module.exports={
		printName:printName,
		printFullName:printFullName
	}