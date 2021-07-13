const mongoose = require('mongoose');

const registartionSchema =new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
         type:String,
         required:true   
    }


})

const Register=new mongoose.model("Register",registartionSchema);

module.exports=Register;