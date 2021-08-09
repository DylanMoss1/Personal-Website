const express = require("express");
const app = express();
const cors = require("cors");

const nodemailer = require('nodemailer'); 

var email;
var password; 

try{
    const private_info = require('./private_info.json');
    email = private_info.email;
    password = private_info.password;
} catch (e) {
    email = ENV['EMAIL_ADDRESS']
    password = ENV['EMAIL_PASSWORD']
}

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

app.listen(4000, () => {

    console.log("server has started on port 5000");
    
    var mailOptions = {
        from: email,
        to: 'dylan.moss2001@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
  
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); 
});