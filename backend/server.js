// modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

// routes
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRoutes.js");

// config
const dbName = "databaseMetaseed"
const port = 8000;

const upload = multer({ dest: "./uploads/"});
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

app.post('/uploads', upload.array('file'), async (req, res) => {
    res.send({ upload: true, file: req.file });
  });

app.listen(port, () => {
    console.log(`backend rodando na porta ${port}`)
})