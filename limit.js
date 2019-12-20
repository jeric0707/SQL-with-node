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
	
	// LIMIT results
	//var sql = "UPDATE customers SET name = 'Jeric C. De Guzman' WHERE name = 'Jeric'";
	var sql = "SELECT *FROM customers LIMIT 2";

	con.query(sql, function(err, result){
		if (err) throw err;
		

		console.log(result);
		
 


 
	});

	
});
