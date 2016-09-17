var storage = require('node-persist');
storage.initSync();

storage.setItemSync("accounts!!!", [{
	username : "pandu",
	balance : 1500
}]);

var accounts = storage.getItemSync("accounts");


var nanisAccount = {
	username : 'Nani',
	balance : 2020
}
accounts.push(nanisAccount);
storage.setItemSync("accounts", accounts);

var newAccounts = storage.getItemSync("accounts");

console.log(accounts);
console.log(newAccounts);