const express = require('express');
const app = express();
const path=require('path');
 const port=process.env.PORT || 3000;
 require("./db/conn");  //connects to database
const Register=require('./models/registers');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.sendFile('index.html');
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//enter into the database
app.post("/",async(req,res)=>{
    try{
        if(req.body.password===req.body.confirmPassword){
            const registerUser=new Register({
                firstName:req.body.firstName,
                lastName:req.body.lastName,
                username:req.body.username,
                email:req.body.email,
                country:req.body.country,
                state:req.body.state,
                password:req.body.password,
                confirmPassword:req.body.confirmPassword,
            })

            const registered=await registerUser.save();
            
            res.send("registered");
                
        }
        else{
            res.send("<h1>passwords do not match</h1>");
        }
    }
    catch(err){
        console.log(err);
    }
})

app.listen(port,(req,res)=>{
    console.log("server started at 3000");
})