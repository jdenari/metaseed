// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

// routes
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");
const leadRouter = require("./routes/leadRoutes.js");
const automatizationRouter = require("./routes/automatizationRoutes.js");

// config
const dbName = "databaseMetaseed"
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/lead", leadRouter)
app.use("/api/automatization", automatizationRouter)

// mongoDB connection
mongoose.connect(
    `mongodb://localhost/${dbName}`,
);

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})