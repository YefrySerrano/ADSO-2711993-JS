const mysql =  require('mysql2')
const connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
	database: "sql10713101",
	port: 3306,
})

connection.connect((error) =>{
	if(!error)
	   {console.log("Conexión exitosa")}
	else{ console.log("Conexión fallida")
	       }		
})

module.exports = connection

