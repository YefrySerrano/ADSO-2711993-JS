const fs = require('fs').promises;
const { connect } = require('http2');
const path = require('path');

const userFilePath = path.join(
    __dirname,
    "../../src/componentes/usuariosRegistrados.json"
);

const controller = {
    register: async function (req, res) {
        try {
            const usersData = await fs.readFile(userFilePath, "utf8");
            const users = JSON.parse(usersData);

            const ultimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                identificacion: req.body.identificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creacion: new Date(),
            };
            console.log(req.body.email)
            console.log(req.body.identificacion)
            for (x of users) {

                if (
                    x.email === req.body.email ||
                    x.identificacion === req.body.identificacion
                ) {
                    res.status(400).send("Email ya existe");
                    return;
                }
            }

            users.push(usuarioNuevo);

            await fs.writeFile(userFilePath, JSON.stringify(users, null, 4));

            res.status(200).send("Usuario creado con exito");
        } catch (error) {
            console.error("Error al procesar el registro:", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    login: async function (req, res){
        try {
            const usersData = await fs.readFile(userFilePath, "utf-8");
            const users = JSON.parse(usersData);

            for (x of users) {
                if (
                    x.email === req.body.email &&
                    x.password === req.body.password &&
                    x.rol === req.body.rol
                ){
                    return res.json({
                        nombres: x.nombres,
                        apellidos: x.apellidos,
                        email: x.email,
                    });
                }
            }
           res.json({title:"error"});
        } catch (error) {
            console.error("Error al procesar el registro", error);
            res.status(500).send("Error interno del servidor");
        }
    },

    regiterDB: function (req,res){
        console.log(req.body)
        const {identificacion,Nombres,Apellidos,email,direccion,telefono,fechaNacimiento,password} = JSON.parse(JSON.stringify(req.body))
        try{
            const sql = "INSERT INTO sql10713101.usuario (indentificacion,nombre,apellido,email,dirrecion,telefono,fechanacimiento,password) VALUES (?,?,?,?,?,?,?,?)"
            connection.execute(sql,[identificacion,Nombres,Apellidos,email,direccion,telefono,fechaNacimiento,password])
            res.status(200).send("Registro exitoso")
        }catch{
            console.error("Error al insertar en la base de datos",error);
            res.status(500).send("Error interno del servidor")
        }
    }
};

module.exports = controller;