require("dotenv").config();
require("./config/database").connect;
const express = require('express');

const app = express();
const User = require('./model/user');
const bcryptjs = require("bcryptjs");

app.use(express.json());
app.get("/", (req,res) =>{
    res.status(200)
    console.log("Success")
})

app.post("/register", async (req,res)=>{
    try{
        const { first_name, last_name, email, password } = req.body;

        if(!(email && password && first_name && last_name)){
            res.status(400).send("All input is Required!");
        }

        const oldUser = await User.findOne( { email } );

        if(oldUser){
            return res.status(409).send("User Already Exists. Please log in!");
        }

        encryptedPassword = await bcryptjs.hash(password, 10);

        const user = await User.create({
            first_name,
            last_name,
            email: email.toLowerCase(),
            password: encryptedPassword,
        });

        const token  = jwt.sign(
            {user_id: user._id, email},
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );
        user.token = token;
        res.status(201).json(user);
    } catch(err){
        console.log(err);
    }
});

app.post("/login", (req,res) =>{

})


module.exports = app;