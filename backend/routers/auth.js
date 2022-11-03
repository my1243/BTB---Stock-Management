const express = require("express");
const router = express.Router();
require("../db/conn");
const User = require("../models/reg");
const Todo = require("../models/todo");
const bcrypt = require("bcryptjs");
const authenticate = require("../middlewares/Authenticate");

router.get("/", (req, res) => {
  res.send("hello hiya router");
});

router.post("/signup", async (req, res) => {
  const { fname, lname, email, phone, gender, password, confimedpassword } =
    req.body;

  if (
    !fname ||
    !lname ||
    !email ||
    !phone ||
    !gender ||
    !password ||
    !confimedpassword
  ) {
    return res.status(422).json({ error: "please fill the field properly" });
  }
  try {
    const userexist = await User.findOne({ email: email });
    if (userexist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password != confimedpassword) {
      return res
        .status(422)
        .json({ Error: "Password and confirm passowrd do not match" });
    } else {
      const user = new User({
        fname,
        lname,
        email,
        phone,
        gender,
        password,
        confimedpassword,
      });
      const data = await user.save();
      if (data) {
        res.status(201).json({ message: "data stored successfully" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
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

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 1000000),
        httpOnly: true,
      });

      if (!isMatch) {
        console.log("e");
        res.status(400).json({ error: "Invalid" });
      } else {
        res.status(201).json({ message: "log in successfully" });
      }
    } else {
      res.status(400).json({ error: "Invalid details" });
    }
    console.log(useremail);
  } catch (err) {
    console.log(err);
  }
});

router.post("/favourites", async (req, res) => {
  try {
    const { email, symbol } = req.body;

    const userEmail = await User.findOneAndUpdate(
      { email: email, favourites: { $ne: [symbol] } },
      { $push: { favourites: symbol } },
      { new: true }
    );
    if (userEmail) {
      //   const sys = req.body.symbol;
      //   var find = false;
      //   userEmail.favourites.map((val, idx) => {
      // if (val == sys) {
      //   find = true;
      // }
      //   });
      //   if (find) {
      // throw new Error("Symbol already added");
      //   }
      //   userEmail.favourites = userEmail.favourites.concat(sys);
      //   const response = await userEmail.save();
      //   if (response) {
      res.status(200).json({ message: "Symbol added successfully!" });
      //   }
    } else {
      res.status(422).json({ message: "Symbol already added" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.patch("/favourites", async (req, res) => {
  try {
    const { email, symbol } = req.body;
    const findUser = await User.findOneAndUpdate(
      { email: email },
      { $pull: { favourites: symbol } },
      { new: true }
    );
    if (findUser) {
      res.status(200).json({ message: "Removed from favorites" });
    } else {
      res.status(422).json({ message: "Failed" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.patch("/updateUser", async (req, res) => {
  try {
    const oldemail = req.body.oldemail;
    const { fname, lname, email, phone, gender } = req.body;

    const userFind = await User.findOneAndUpdate(
      { email: oldemail },
      { fname, lname, email, phone, gender },
      {
        new: true,
      }
    );
    if (userFind) {
      return res.status(200).json({ message: "Success" });
    } else {
      return res.status(422).json({ err: "not valid" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/user", async (req, res) => {
  try {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email });
    if (findUser) {
      res.status(200).json({ message: "User Verified!" });
    } else {
      res.status(422).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.patch("/fpassword", async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.newpassword;
    console.log(password);
    const hashp = await bcrypt.hash(password, 10);
    const hashcp = await bcrypt.hash(password, 10);

    const findUser = await User.findOneAndUpdate(
      { email: email },
      { $set: { password: hashp, confimedpassword: hashcp } },
      { new: true }
    );
    if (findUser) {
      res.status(200).json({ message: "Password updated successful" });
    } else {
      res.status(422).json({ message: "password not updated" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/portfolio", authenticate, (req, res) => {
  console.log("hello from portfolio");
  res.send(req.rootUser);
});

router.post("/stocks", async (req, res) => {
  const { email, sharename, quantity, DOP, rate, upperLimit, lowerLimit } =
    req.body;
  console.log(sharename);
  try {
    const user = User.findOne({ email: email });
    if (user) {
      const userFind = await Todo.findOneAndUpdate(
        {
          email: email,
          stocks: { $not: { $elemMatch: { sharename: sharename } } },
        },
        {
          $push: {
            stocks: { sharename, quantity, DOP, rate, upperLimit, lowerLimit },
          },
        },
        { new: true }
      );
      if (userFind) {
        res.status(200).json({ message: "stocks pushed" });
      }else{
        res.status(422).json({message:"Stocks addition failed"});
      }
    } else {
      const newTodo = new Todo({
        email,
        stocks: { sharename, quantity, DOP, rate, upperLimit, lowerLimit },
      });
      const data = await newTodo.save();
      if (data) {
        res.status(200).json({ message: "stocks pushed" });
      } else {
        res.status(422).json({ message: "Stocks addition failed" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/stocks", async (req,res) => {
    const email = req.body.email;
    console.log(email);
    try{
        const userFind = await User.findOne({email:email});
        if(userFind){
            res.status(200).send(userFind.stocks);
        }else{
            res.status(422).send("user not found");
        }
    }catch(err){
        console.log(err);
    }
})

router.post("/destocks", async (req, res) => {
  const { email, sharename, quantity, DOP, rate, upperLimit, lowerLimit } =
    req.body;
  console.log(sharename);
  try {
    const user = User.findOne({ email: email });
    if (user) {
      const userFind = await Todo.findOneAndUpdate(
        {
          email: email,
          stocks: { $elemMatch: { sharename: sharename } },
        },
        {
          $pull: {
            stocks: { sharename, quantity, DOP, rate, upperLimit, lowerLimit },
          },
        },
        { new: true }
      );
      if (userFind) {
        res.status(200).json({ message: "stock deleted" });
      }
      else{
        res.status(422).json({message:"Stocks not removed"});
      }
    } 
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).send("user logout");
});

module.exports = router;
