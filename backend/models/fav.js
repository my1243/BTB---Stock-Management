//const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const favSchema = new mongoose.Schema({
    id1 : {
         
        type: String,
        required : true
    },
    fullname : {
        type: String,
        required : true
    },
    email : {
        type: String,
        required : true
    },
    cmpname : {
        type: String,
        required : true
    },
     cmpsym: {
        type: String,
        required : true
    },
    high : {
        type: String,
        required : true
    },    
    low : {
        type: String,
        required : true
    },
    change : {
        type: String,
        required : true
    },
})

// favSchema.pre("save", async function(next) {
//     if(this.isModified("password")){
//     console.log(`the pass is ${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     this.confimedpassword = await bcrypt.hash(this.confimedpassword, 10);
//     console.log(`the pass is ${this.password}`);
//     }
//     next();
// } )


const Favourite = new mongoose.model("favUser", favSchema);

module.exports = Favourite;