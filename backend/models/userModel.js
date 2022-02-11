var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bcrypt = require('bcrypt');

var userSchema = new Schema({
	'id' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'INSERT_YOUR_REFERENCE_NAME_HERE'
	},
	'username' : String,
	'password' : String,
	'email' : String,
});

//before calling 'save' - crypt password
userSchema.pre('save', function(next){
	var user = this;
	bcrypt.hash(user.password, 10, function(err, hash){
		if(err) {
			return next(err);
		} 
		user.password = hash;
		next();
	});
});

//check if user exists (username + password)
userSchema.statics.authenticate = function(username, password, callback){
	User.findOne({username: username})
		.exec(function(err, user){
			if(err){
				console.log("test: " + err);
				return callback(err);
			}
			else if(!user){
				console.log("test: " + err);
				var err = new Error("User not found!");
				err.status = 401;
				return callback(err);
			}	
			bcrypt.compare(password, user.password, function(err, result){
				if(result === true){
					return callback(null, user);
				} 
				else{
					return callback();
				}
			});
		});	
}

var User = mongoose.model('user', userSchema);
module.exports = User;
