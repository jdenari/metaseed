// modules
const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cors = require("cors")

// routes
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");

// config
const dbName = "databaseMetaseed"
const port = 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

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