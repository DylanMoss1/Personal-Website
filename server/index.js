const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');
const bodyParser = require('body-parser');

const sanitizer = require('sanitizer');

const { MongoClient } = require('mongodb');

const port = process.env.PORT || 4000;

const nodemailer = require('nodemailer'); 
const { response } = require("express");
const { nextTick } = require("process");

var email;
var password;
var uri;

try{
    const private_info = require('./private_info.json');
    email = private_info.email;
    password = private_info.password;
    uri = private_info.uri;

} catch (e) {
    email = process.env.EMAIL_ADDRESS;
    password = process.env.EMAIL_PASSWORD;
    uri = process.env.MONGODB_URI;
}

const client = new MongoClient(uri);
var blacklisted = [];

app.set('port', port);
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true })); 

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

const send_email = (name, email, message) => { 

    if (!(email in blacklisted)){
        var msg = name + "\n\n" + email + "\n\n" + message;

        var mailOptions = {
            from: email,
            to: 'dm894@cam.ac.uk',
            subject: 'Website Contact Me Request',
            text: msg
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        }); 
    }
}

const sanatize_input = (input) => {
    var clean = sanitizer.sanitize(input, function(str) {
        return str;
    });

    clean = clean.replace(/<(?:.|\n)*?>/gm, "");
    clean = clean.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/ig, "\n");
    return clean.trim();
}

  
app.post("/contactme-submit", (req, res) => {
    let name = sanatize_input(req.body.name);
    let email = sanatize_input(req.body.email);
    let message = sanatize_input(req.body.message);
    
    send_email(name, email, message);

    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("/db", async (req,res) => {
    try { 
        await client.connect();
        const results = await client.db("ContactRequests").collection("contact_me").findOne({name: "Dylan"});
        console.log(results);
        console.log(results.content);
        res.json({ message: results.content });
    } catch (e) {
        console.log(e);
    } finally {
        await client.close();
    } 
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});


async function listDatabases(client) {
    db_list = await client.db().admin().listDatabases();

    console.log("Databases:");

    db_list.databases.forEach(db => console.log(   ` - ${db.name}`));
}

  
app.listen(port, async() => {

    console.log(`server has started on port ${port}`);
    
    

    /*
    try {

        await client.connect();

        await listDatabases(client);

    } catch (e) {

        console.log(e);

    } finally {

        await client.close();

    }
    */

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