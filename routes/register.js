var Account = require('../models/account');

exports.cool = function(req, res) {
	var db = req.db;

	/*var collection = db.get('accounts');
	collection.insert(req.)
	var newActivity = {
		"description":req.query.description
	};
	console.log(newActivity);

	data["activity"].push(newActivity);*/
	console.log(req.query.fullname);
	console.log(req.query.email);
	console.log(req.query.username);
	console.log(req.query.password);
}