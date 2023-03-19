// modules
require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// routes
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const leadRouter = require("./routes/leadRoutes.js");
const automatizationRouter = require("./routes/automatizationRoutes.js");
const faceadsRouter = require("./routes/faceadsRoutes.js");

// config
const port = 5000;
  
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/lead", leadRouter)
app.use("/api/automatization", automatizationRouter)
app.use("/api/faceads", faceadsRouter)

app.get("/", (req, res) => {
    res.json({ message: "Rota teste"})
})

// mongoDB connection
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.cpdotrm.mongodb.net/databaseMetaseed?retryWrites=true&w=majority`,
);

app.listen(port, () => {
    console.log(`backend rodando na porta ${port} e ${process.env.MY_VARIABLE}`)
})