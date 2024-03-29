const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

// register a new user
router.post("/register", async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;

    // check for required fields
    if(firstName == null || lastName == null || company == null || email == null || password == null || confirmpassword == null){
        return res.status(400).json({ error: "Por favor, preencha todos os campos!"});
    }

    // checks if the passwords match
    if( password !=  confirmpassword){
        return res.status(400).json({ error: "As senhas não conferem"});
    }

    // check if the user exists
    const emailExist = await User.findOne({ email: email});

    if(emailExist){
        return res.status(400).json({ error: "O e-mail informado ja está em uso!"});
    }

    // create password
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
        firstName: firstName,
        lastName: lastName,
        company: company,
        email: email,
        phone: phone,
        password: passwordHash
    });

    try{
        const newUser = await user.save();

        // create token
        const token = jwt.sign(
            {
                name: newUser.name,
                id: newUser._id
            },
            "oursecret"
        );

    // return token
    res.json({  error: null, 
                msg: "Você realizou o cadastro com sucesso!", 
                token: token, 
                userId: newUser._id})
        
    } catch(error){
        res.status(400).json({ error })
    }
});

// it allows the user to make a login
router.post("/login", async (req, res) => {
    
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const company = req.body.company;
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;

    const user = await User.findOne({ email: email });

    if(!user){return res.status(400).json({ error: "Não há um usuário cadastrado com esse email!" })}

    // check if password match
    const checkPassword = await bcrypt.compare(password, user.password);

    if(!checkPassword){
        return res.status(400).json({ error: "Senha Inválida!"});
    }

    // create token
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id
        },
        "oursecret"
    );

    // return token
    res.json({ error: null, msg: "Você está autenticado!", 
        token: token, 
        userId: user._id, 
        firstName: user.firstName, 
        lastName: user.lastName, 
        company: user.company,
        email: user.email,
        phone: user.phone
    })
})

module.exports = router;