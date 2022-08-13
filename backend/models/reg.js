const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname : {
        type: String,
        required : true
    },
    lname : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    phone : {
        type: Number,
        required : true
    },
    gender : {
        type: String,
        required : true
    },
    password : {
        type: String,
        required : true
    },    
    confimedpassword : {
        type: String,
        required : true
    },
})

userSchema.pre("save", async function(next) {
    if(this.isModified("password")){
    console.log(`the pass is ${this.password}`);
    this.password = await bcrypt.hash(this.password, 10);
    this.confimedpassword = await bcrypt.hash(this.confimedpassword, 10);
    console.log(`the pass is ${this.password}`);
    }
    next();
} )


const User = new mongoose.model("User", userSchema);

module.exports = User;