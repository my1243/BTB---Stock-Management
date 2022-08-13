const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../models/reg");
const bcrypt = require("bcryptjs");

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
            return res.status(422).json({ error: "Email is already exist" });
        }
        const user = new User({ fname, lname, email, phone, gender, password, confimedpassword });
        await user.save();
        res.status(201).json({ message: "data stored successfully" });
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

            if (!isMatch) {
                res.status(400).json({ error: "Invalid" });
            }
            else {
                res.json({ message: "log in successfully" });
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

module.exports = router;