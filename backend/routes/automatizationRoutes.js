const router = require("express").Router();
const { PythonShell } = require("python-shell");
let responseScript

router.put("/uploads", async (req, res) => {

    let options = {
        scriptPath: "scripts",
        args: JSON.stringify(req.body)
    };
    PythonShell.run("first-test.py", options, (error, res) => {
        if (error) {
            console.log(error);
        }
        if (res) {
            responseScript = JSON.parse(res)
        }
    });
    
    res.json(responseScript)
});

module.exports = router