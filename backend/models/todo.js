//const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    sharename : {
        type: String,
        required : true
    },
    quantity : {
        type: Number,
        required : true
    },
    dateOfPurchase : {
        type: String,
        required : true
    },
    rate : {
        type: Number,
        required : true
    },
    upperLimit : {
        type: Number,
        required : true
    },
    lowerLimit : {
        type: Number,
        required : true
    },    
})

// todoSchema.pre("save", async function(next) {
//     if(this.isModified("password")){
//     console.log(`the pass is ${this.password}`);
//     this.password = await bcrypt.hash(this.password, 10);
//     this.confimedpassword = await bcrypt.hash(this.confimedpassword, 10);
//     console.log(`the pass is ${this.password}`);
//     }
//     next();
// } )


const Todo = new mongoose.model("todoUser", todoSchema);

module.exports = Todo;