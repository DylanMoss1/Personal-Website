const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const {MongoClient} = require('mongodb');

const PORT = process.env.PORT || 4000;

const nodemailer = require('nodemailer'); 

var email;
var password; 

try{
    const private_info = require('./private_info.json');
    email = private_info.email;
    password = private_info.password;
} catch (e) {
    email = process.env.EMAIL_ADDRESS
    password = process.env.EMAIL_PASSWORD
}

app.set('port', PORT);
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});
  
app.listen(PORT, () => {

    console.log(`server has started on port ${PORT}`);
    
    var mailOptions = {
        from: email,
        to: 'dylan.moss2001@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };
  
    /*
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    }); 
    */
});