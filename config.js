const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/userRagistration").then(()=>{
    console.log('connction is succesful');
}).catch((e)=>{
    console.log('no connection');
})