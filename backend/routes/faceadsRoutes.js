const router = require("express").Router();
const Faceads = require("../models/faceads");

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

module.exports = router;