var argv = require('yargs')
	.command('Hello', 'Greet', function(yargs){
		yargs.options({
			name : {
				demand : true,
				alias : 'n',
				description : "your first name."
			},
			lastname : {
				demand : true,
				alias : 'm',
				description : "your last name."
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];
 if(command ==='Hello' && typeof argv.name !== 'undefined' && typeof argv.lastname !== 'undefined'){
	console.log("Hello " + argv.name + "!"+argv.lastname);
 } else if(command === 'Hello'){
	 console.log("Hello World!" + argv.lastname);
 } else {
	 console.log("No greetings for you!!!!!")
 }