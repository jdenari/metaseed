const router = require("express").Router();
const Faceads = require("../models/user");

// get an user
router.post("/getFaceads", async (req, res) => {
    
    value = req.body
    
    console.log(value)

    try{
        const newUser = await Faceads.save();

    // return token
    res.json({  error: null, 
                msg: "Você realizou o cadastro com sucesso!", 
                userId: newUser._id})
        
    } catch(error){
        res.status(400).json({ error })
    }
    
    
});

module.exports = router;