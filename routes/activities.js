var data = require('../data.json');

exports.view = function(req, res){
	console.log(data);
	res.render('activities', data);
};

/*exports.add = function(req, res) {
	res.render('add', data);

	var newActivity = {
		"description":req.query.description,
	};
	console.log(newActivity);

	data["activity"].push(newActivity);
}*/