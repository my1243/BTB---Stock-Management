const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../models/reg");
const bcrypt = require("bcryptjs");
const authenticate = require("../middlewares/Authenticate");

router.get('/', (req, res) => {
    res.send("hello hiya router");
});

router.post('/signup', async (req, res) => {

    const { fname, lname, email, phone, gender, password, confimedpassword } = req.body;

    if (!fname || !lname || !email || !phone || !gender || !password || !confimedpassword) {
        return res.status(422).json({ error: "please fill the field properly" });
    }
    try {
        const userexist = await User.findOne({ email: email })
        if (userexist) {
            return res.status(422).json({ error: "Email already exist" });
        }else if (password != confimedpassword){
            return res.status(422).json({Error:"Password and confirm passowrd do not match"});
        }else{
        const user = new User({ fname, lname, email, phone, gender, password, confimedpassword });
        const data = await user.save();
        if(data){
            res.status(201).json({ message: "data stored successfully" });
        }
    }
    } catch (err) {
        console.log(err);
    }

});


router.post('/login', async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        if (!email || !password) {
            return res.status(400).json({ error: "plz fill it" });
        }
        const useremail = await User.findOne({ email: email });

        if (useremail) {
            const isMatch = await bcrypt.compare(password, useremail.password);
            const token = await useremail.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken", token,{
                expires:new Date(Date.now() + 1000000),
                httpOnly:true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid" });
            }
            else {
                res.status(201).json({ message: "log in successfully" });
            }
        } else {
            res.status(400).json({ error: "Invalid details" });
        }
        console.log(useremail);
    } catch (err) {
        console.log(err);
    }
}
)

router.post('/favourites', async (req,res) => {
    try{
        const email = req.body.email;

        const userEmail = await User.findOne({email: email});
        if(userEmail) {
            const sys = req.body.symbol;
            var find = false;
            userEmail.favourites.map((val,idx) => {
                if(val.symbol == sys){
                    find = true;     
                }
            })
            if(find){
                throw new Error("Symbol already added");
            }
            userEmail.favourites = userEmail.favourites.concat({symbol:sys});
            const response = await userEmail.save();
            if(response){
                res.status(200).json({message:"Symbol added successfully!"});
            }
        }
    }catch(err){
        console.log(err);
    }
})

router.get('/portfolio',authenticate,(req,res) => {
    console.log("hello from portfolio");
    res.send(req.rootUser);
})

module.exports = router;