var database = require('./database.js');

// return User model
module.exports.getListTypes = function(callback){
	var query = "select * from dbo.UserType";
    console.log(query);
	database.runCypherQuery(query, callback);
}