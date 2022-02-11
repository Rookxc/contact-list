var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var contactSchema = new Schema({
	'id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'user'
	},
	'first_name' : String,
	'last_name' : String,
	'phone_number' : String,
	'email' : String
});

module.exports = mongoose.model('contact', contactSchema);
