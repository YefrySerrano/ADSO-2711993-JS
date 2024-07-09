const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
    let config ={
        method: "GET",
        maxBodyLength:Infinity,
        url: 'http:/api.jsonbin.io/v3/b/6654d656e41b4d34e4fa5b15',
        headers:{
            'Content-Type': 'application/json',
            'X-Master-Key': '$2a$10$rewnAHPFibJMjkaY3d0ttuinksq0YRY.8qjtjI.OkTZdefwGqyi'

        }
    }
    LineAxisOutlined(config)
    .then(result => {
        res.send(result.data.record);
    })
});

const user = require("./controller/userController");
app.use("/registro-usuario", user.registerDB);
app.use("/login", user.login);

const PORT = 3001;
app.listen(PORT, ()=> {
    console.log("Servidor corriendo en el puerto",PORT);
});

//Solicitamos la conexión a la BD
const conexion = require('./configBD')

app.get("/todos-los-Usuarios", (req, res) => {
conexion.connect(function (err) {
if (err) throw err;
//Select all customers and return the result object:
conexion.query("SELECT * FROM sql10713101.usuario", function (err, result, fields) {
if (err) throw err;
res.send(result)
});
});
})

