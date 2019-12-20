var mysql = require('mysql');
//create A Connection
var con = mysql.createConnection({
	host : "localhost",
	user : "root",
	password: "",
	database: "nodedb" , 
})
//Connect to mysql
con.connect(function(err) {
	if (err) throw err;
	console.log("Connected to the Database!");
	
	// drop table

	var sql = "DROP TABLE IF EXISTS customers";

	con.query(sql, function(err, result){
		if (err) throw err;
		

		console.log(result);
		
 


 
	});

	
});
