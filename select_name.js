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
	
	//SELECT specific data
	var sql = "SELECT name, id FROM customers";
	

	con.query(sql, function(err, result, fields){
		if (err) throw err;
		

		console.log(result);
		



 
	});

	
});
