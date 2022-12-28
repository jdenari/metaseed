const router = require("express").Router();
const { PythonShell } = require("python-shell");
let responseScript

router.put("/uploads", async (req, res) => {

    let options = {
        scriptPath: "../scripts",
        args: JSON.stringify(req.body)
    };
    PythonShell.run("first-test.py", options, (err, res) => {
        if (err) {
            console.log(err);
        }
        if (res) {
            responseScript = JSON.parse(res)
            console.log(responseScript)
        }
    });
    
    res.json(responseScript)
});

module.exports = router