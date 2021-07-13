const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/demoRegistration",{
    useNewUrlParser:true,
    useUnifiedUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection successful");
}).catch((e)=>{
    console.log("connection error");
})