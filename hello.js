var mysql = require('mysql');
//create A Connection
var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "",
})
//Connect to mysql
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to the Database!");
	con.query("CREATE DATABASE nodeDB", function(err,result){
		if (err)throw err;
		console.log("Database Created!");

	});
});
