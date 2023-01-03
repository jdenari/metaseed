const router = require("express").Router();
const bcrypt = require("bcrypt")

const User = require("../models/user");

// middleware
const verifyToken = require("../helpers/check-token")

// helpers
const getUserByToken = require("../helpers/get-user-by-token")

// get an user
router.get("/:id", verifyToken, async (req, res) => {
    const id = req.params.id;
    // verify user
    try {
        const user = await User.findOne({_id: id}, {password: 0});
        res.json({ error: null, user })
    } catch (err) {
        return res.status(400).json({error: "O usuário não existe!"})
    }
    
});

// update the data profile of user
router.put("/profile", verifyToken, async (req, res) =>{
    
    // it checks if the user can modify the data
    const token = req.header("auth-token");
    const user = await getUserByToken(token);
    const userReqId = req.body.id;
    const userId = user._id.toString();

    if(userId != userReqId){
        res.status(401).json({error: "Acesso Negado!"});
    }

    // creating the object to update the data
    const updateData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone
    };

    try {
        // update the data inside the mongoDB
        const updateUser = await User.findOneAndUpdate({ _id: userId }, { $set: updateData }, {new: true});
        res.json({ error : "Usuário atualizado com sucesso!", data: updateUser})
    } catch(error) {
        // it returns an error
        res.status(400).json({ error })
    }

})

// update the password profile of user
router.put("/password", verifyToken, async (req, res) =>{
   
    // it checks if the user can modify the data
    const token = req.header("auth-token");
    const user = await getUserByToken(token);
    const userReqId = req.body.id;
    const password = req.body.newPassword;
    const confirmpassword = req.body.confirmNewPassword;
    const userId = user._id.toString();

    console.log(userReqId)
    console.log(userId)

    if(userId != userReqId){
        res.status(401).json({error: "Acesso Negado!"});
    }

    // creating the object to update the data
    const updateData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        company: user.company,
        email: user.email,
        phone: user.phone
    };

    // check if the password match
    if(password != confirmpassword){
        res.status(401).json({ error : "As senhas não conferem"})
    } else if (password == confirmpassword && password != null){
        const salt = await bcrypt.genSalt(12);
        const passwordHash = await bcrypt.hash(password, salt)
        updateData.password = passwordHash;
    }

    try {
        // update the data inside the mongoDB
        const updateUser = await User.findOneAndUpdate({ _id: userId }, { $set: updateData }, {new: true});
        res.json({ error : "Usuário atualizado com sucesso!", data: updateUser})
    } catch(error) {
        // it returns an error
        res.status(400).json({ error })
    }

})

module.exports = router