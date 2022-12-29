const router = require("express").Router();
const { PythonShell } = require("python-shell");
let responseScript

// Route to the 1st script
router.put("/uploads/script-01", async (req, res) => {

    let options = {
        scriptPath: "scripts",
        args: JSON.stringify(req.body)
    };


    PythonShell.run("script-01.py", options, (err, res) => {
        if (err) {
        }
        if (res) {
            responseScript = JSON.parse(res)
        }
    });
    
    res.json(responseScript)
});

// Route to the 2st script
router.put("/uploads/script-02", async (req, res) => {

    let options = {
        scriptPath: "scripts",
        args: JSON.stringify(req.body)
    };


    PythonShell.run("script-02.py", options, (err, res) => {
        if (err) {
        }
        if (res) {
            responseScript = JSON.parse(res)
        }
    });
    
    res.json(responseScript)
});

// Route to the 3st script
router.put("/uploads/script-03", async (req, res) => {

    let options = {
        scriptPath: "scripts",
        args: JSON.stringify(req.body)
    };


    PythonShell.run("script-03.py", options, (err, res) => {
        if (err) {
        }
        if (res) {
            responseScript = JSON.parse(res)
        }
    });
    
    res.json(responseScript)
});

module.exports = router