const router = require("express").Router();
const Lead = require("../models/lead");

// register a new user
router.post("/leadResponse", async (req, res) => {

    const fullName = req.body.fullName;
    const email = req.body.email;
    const phone = req.body.phone;
    const comment = req.body.comment
    const date = req.body.date

    // check for required fields
    if(fullName == '' || email == '' || phone == '' || comment == '' ){
        return res.status(400).json({ error: "Por favor, preencha todos os campos!"});
    }

    const lead = new Lead({
        date: date,
        fullName: fullName,
        email: email,
        phone: phone,
        comment: comment
    });

    try{
        const newLead = await lead.save();

    // return token
    res.json({  error: null, 
                msg: "Você realizou o cadastro com sucesso!", 
                leadId: newLead._id})
        
    } catch(error){
        res.status(400).json({ error })
    }
});

module.exports = router;