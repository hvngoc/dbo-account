var sql = require("mssql");
var request = require("request");

module.exports.runCypherQuery = function (query, callback) {

    var config = {
        user: 'sa',
        password: 'Centralize1234!',
        server: 'http://127.0.0.1',
        database: 'TestDB'
    }

    sql.connect(config, function (err) {

        if (err) {
            console.log(err);
        }
        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query(query, function (err, recordset) {
            if (err) {
                console.log(err)
            }

            // send records as a response
            callback(err, recordset)
        });
    });
}