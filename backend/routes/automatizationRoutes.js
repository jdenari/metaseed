const router = require("express").Router();
const { PythonShell } = require("python-shell");
let responseScript

// Route to the 1st script
router.put("/uploads/script-01", async (req, res) => {
    let options = {
        scriptPath: "scripts/scripts",
        args: JSON.stringify(req.body)
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-01.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    try {
        const scriptResult = await goToScript()
        res.json(scriptResult);
    } catch (e) {
        res.json(e);
    }
});

// Route to the 2st script
router.put("/uploads/script-02", async (req, res) => {
    let options = {
        scriptPath: "scripts/scripts",
        args: JSON.stringify(req.body)
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-02.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    try {
        const scriptResult = await goToScript()
        res.json(scriptResult);
    } catch (e) {
        res.json(e);
    }
});

// Route to the 3st script
router.put("/uploads/script-03", async (req, res) => {
    let options = {
        scriptPath: "scripts/scripts",
        args: JSON.stringify(req.body),
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-03.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    
    try {
        const scriptResult = await goToScript()
        res.json(scriptResult);
    } catch (e) {
        res.json(e);
    }
});

router.put("/uploads/script-04", async (req, res) => {
    let options = {
        scriptPath: "scripts/scripts",
        args: JSON.stringify(req.body)
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-04.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    try {
        const scriptResult = await goToScript()
        res.json(scriptResult);
    } catch (e) {
        res.json(e);
    }
});

router.put("/uploads/script-05", async (req, res) => {
    let options = {
        scriptPath: "scripts/scripts",
        args: JSON.stringify(req.body)
    };
  
    const goToScript = () => {
        return new Promise((resolve, reject) => {
            PythonShell.run("script-05.py", options, (err, res) => {
                if (err) {reject(err)}
                responseScript = JSON.parse(res)
                resolve(responseScript)
            })
        })
    }
    try {
        const scriptResult = await goToScript()
        res.json(scriptResult);
    } catch (e) {
        res.json(e);
    }
});

module.exports = router;