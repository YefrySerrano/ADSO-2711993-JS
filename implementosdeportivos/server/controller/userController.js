const fs = require('fs').promises;
const path = require('path');

const userFilePath = path.join(
    __dirname,
    "../../src/componetnes/usuariosRegitrados.json"
);

const controller = {
    register: async function (req, res) {
        try {
            const usersData = await fs.readFile(userFilePath, "utf8");
            const users = JSON.parse(usersData);

            const utlimo = users.length;
            const usuarioNuevo = {
                id: ultimo + 1,
                indentificacion: req.body.indentificacion,
                nombres: req.body.nombres,
                apellidos: req.body.apeliidos,
                email: req.body.email,
                direccion: req.body.direccion,
                telefono: req.body.telefono,
                fechaNacimiento: req.body.fechaNacimiento,
                password: req.body.password,
                estado: "activo",
                rol: "Usuario",
                fecha_creacion: new Date(),
            };
            for (x of users) {
                if (
                    X.email === req.body.email ||
                    X.indentificacion === req.body.indentificacion
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

    login: async function (req, res) {
        try {
            const usersData = await fs.readFile(userFilePath, "utf8");
            const users = JSON.parse(usersData);

            for (x of users) {
                if (
                    x.email === req.body.email &&
                    x.password === req.body.password &&
                    x.rol === req.body.rol
                ) {
                    res.status(200).send("ok");
                    return;
                }
            }
            res.status(400).send("Error");
        } catch (error) {
            console.errror("Error al procesar el resgitro:", error);
            res.status(500).send("Error interno del servidor");
        }
    },
};

module.exports = controller;