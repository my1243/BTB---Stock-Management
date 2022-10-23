const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/condetail2",{
    mongoose.connect("mongodb+srv://purva:I1lGx89Om044VQeq@cluster0.roknseb.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err);
})