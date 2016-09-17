var storage = require('node-persist');
storage.initSync();

/*function createAccount(account){
	var accounts1 = storage.getItemSync("accounts1");
	console.log(typeof account);
	if(typeof accounts1 === 'undefined'){
		
		var accounts1 = [];
	}
	
	accounts1.push(account);
	storage.setItemSync("accounts1", accounts1);
	
	return account;
}
*/
function getAccount(accountName){
	var accounts1 = storage.getItemSync("accounts1");
	console.log(typeof accountName);
	var matchedAccount;
	var isLoop= false;
	
	accounts1.forEach(function(obj){
		
		if(isLoop === true){
			return;
		}
		
		if(obj.name === accountName){
			matchedAccount = obj;
			isLoop = true;
		}
	})
	return matchedAccount;
}

/*createAccount({
	name : 'Twitter',
	username : 'varthapandurangarao@gmail.com',
	password : "Twitter"
})
createAccount({
	name : 'facebook',
	username : 'pandurangarao@gmail.com',
	password : "Twitter"
})
*/

var fbAccount = getAccount("facebook");
console.log(fbAccount);
var fbAccount = getAccount("Twitter");
console.log(fbAccount);