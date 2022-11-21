// modules
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

// routes

// middlewares

// config
const dbName = "databaseMetaseed"
const port = 2345;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// mongoDB connection
mongoose.connect(
    `mongodb://localhost/${dbName}`,
);

app.get("/", (req, res) => {
    res.json({ message: "Rota teste!"})
});

app.listen(port, () => {
    console.log(`backend rodand na porta ${port}`)
})