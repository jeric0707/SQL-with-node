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
	
	//insert into many
	var sql = "INSERT INTO customers (name,email) VALUES ?";
	var values = [
		['Jeric', 'jeric@jeric.com'],
		['Angelo', 'angelo@angelo.com'],
		['gale', 'gale@gale.com'],
	]
	

	con.query(sql, [values], function(err, result){
		if (err) throw err;
		console.log("Records Inserted: " +result.affectedRows);


	});

	
});
