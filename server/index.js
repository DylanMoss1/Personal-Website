const express = require("express");
const app = express();
const cors = require("cors");
const path = require('path');

const { MongoClient } = require('mongodb');

const port = process.env.PORT || 4000;

const nodemailer = require('nodemailer'); 
const { response } = require("express");

var email;
var password;
var uri;

try{
    const private_info = require('./private_info.json');
    email = private_info.email;
    password = private_info.password;
    uri = private_info.uri;

} catch (e) {
    email = process.env.EMAIL_ADDRESS
    password = process.env.EMAIL_PASSWORD
    uri = process.env.MONGODB_URI
}

const client = new MongoClient(uri);

app.set('port', port);
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

app.get("/db", async (req,res) => {

    try { 

        await client.connect();

        const results = await client.db("ContactRequests").collection("contact_me").findOne({name: "Dylan"});
    
        console.log(results)
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
    
    var mailOptions = {
        from: email,
        to: 'dylan.moss2001@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    try {

        await client.connect();

        await listDatabases(client);

    } catch (e) {

        console.log(e);

    } finally {

        await client.close();

    }

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