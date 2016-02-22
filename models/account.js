var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var accountSchema = new Schema( {
	Username: { type : String, default:''},
	Pass: { type: String, default:''},
	Email: { type: String, default:''},
	Worktime: { type: Number, default:''},
	Breaktime: { type: Number, default:''},
	Sessions: { type: Number, default:''},
	Activities: [{ body: String }]
	}
);

module.exports = mongoose.model('Account', accountSchema);