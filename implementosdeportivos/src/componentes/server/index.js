const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Saludando desde el backend!");
})

const PORT = 3001
app.listen(PORT, () => {
    console.log("Server is running on port",PORT);
})