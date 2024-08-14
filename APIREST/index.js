import express from 'express';
import fs from 'fs'; // para manipulacion de archivos FileSystem
import bodyParser from 'body-parser';

const app = express();
app.get("/",(req, res) => {
    res.send("Bienvenido a mi api Rest en NODEJS");
})


const readData = () => {
    try {
        const data = fs.readFileSync("./db.json");
        return JSON.parse(data);
    } catch (error) {
        console.log(error);
        
    }
};

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data));
    } catch (error) {
        console.log(error);
    }
}

//GET

app.get("/tenis", (req, res) => {
    const data = readData();
    res.send(data);
})

//GET para recuro en especifico 

app.get("/tenis/:id", (req, res) => {
    const data = readData();
    const id = parseInt(req.params.id);
    const partenis = data.tenis.find((partenis) => partenis.id === id);
    res.json(partenis);
})

//POST
app.post("/crear", (req, res) => {
    const data = readData();
    const body = req.body;
    const newTennis = {
        id: data.tenis.length +1,
        ... body,
    }
    data.tenis.push(newTennis);
    res.json(newTennis);
})

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})

