var argv = require('yargs').argv;

console.log(argv);

 var command = argv._[0];
 if(command === 'greet' && typeof argv.name !== 'undefined'){
	console.log("Hello " + argv.name + " " + argv.lastname + "!");
 } else if(command === 'greet'){
	 console.log("Hello World!!!!")
 } else {
	 console.log("No greetings for you!")
 }