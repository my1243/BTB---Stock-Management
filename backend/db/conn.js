const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/condetail2",{
    mongoose.connect("mongodb://dpurva2003:MXctHgahhedLMwLA@ac-wdmk1zn-shard-00-00.pfik0ih.mongodb.net:27017,ac-wdmk1zn-shard-00-01.pfik0ih.mongodb.net:27017,ac-wdmk1zn-shard-00-02.pfik0ih.mongodb.net:27017/?ssl=true&replicaSet=atlas-yxva2h-shard-0&authSource=admin&retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfull");
}).catch((err)=>{
    console.log(err);
})