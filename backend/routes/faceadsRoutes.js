const router = require("express").Router();
const Faceads = require("../models/faceads");

const { PythonShell } = require("python-shell");
let responseScript

// get an user
router.post("/updateDataDatabase", async (req, res) => {
    
    const values = req.body.data;
  
    try {
        // remove all documents from the collection
        await Faceads.deleteMany({});
    
        values.forEach(element => {
            Faceads.insertMany(element);
        })

        res.json({
            error: null,
            msg: "Dados cadastrados com sucesso!",
        });

    } catch (error) {
      res.status(400).json({ error });
    }
});

router.get("/getDataDatabase", async (req, res) => {
    try {
        const faceads = await Faceads.find();
        res.json({ data: faceads });
    } catch (error) {
        res.status(400).json({ error });
    }
});

router.post("/googleData", async (req, res) => {

    let options = {
        scriptPath: "scripts",
        args: JSON.stringify(req.body)
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-07.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    try {
        const scriptResult = await goToScript()

        console.log(scriptResult)

        scriptResult.forEach(element => {
            Faceads.insertMany(element);
        })

        res.json({
            error: null,
            msg: "Dados cadastrados com sucesso!",
        });
    } catch (e) {
        console.log(e)
        res.json(e);
    }
});

module.exports = router;