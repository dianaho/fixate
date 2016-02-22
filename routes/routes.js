var Account = require('../models/account');

function getAccounts(res){
	Account.find(function(err, accounts) {
		if (err)
			res.send(err)

		res.json(accounts); // return all todos in JSON format
	});
};

module.exports = function(app) {
	app.get('/accounts.html', function(req, res) {
		//res.render('index', getAccounts(res));
		getAccounts(res);
	});
}