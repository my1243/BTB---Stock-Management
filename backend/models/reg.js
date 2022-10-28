const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
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
    tokens : [
        {
            token:{
                type:String,
                required:true
            }
        }
    ],
    favourites : [
        {
            symbol : {
                type:String,
                required: true
            }
        }
    ]
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

userSchema.methods.generateAuthToken = async function () {
    try{
        let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    }catch(err){
        console.log(err);
    }
}


const User = new mongoose.model("User", userSchema);
module.exports = User;