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
	
	//create table
	var sql = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR (255))";
	con.query(sql, function(err, result){
		if (err) throw err;
		console.log("Table has been created... ");


	});

	
});
