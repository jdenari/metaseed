const router = require("express").Router();

router.put("/uploads", async (req, res) => {

    console.log(req.body)
    // res.json(req.body)
});

module.exports = router