const express = require('express');
const parser = require('body-parser');
const server = express();

const MongoClient= require('mongodb').MongoClient;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017',function(err,client){
 if(err){
   console.log(err);
   return;
 }
 const db = client.db("EventWishList");
 console.log("connected to database");


 server.use(express.static('client/public'));
 server.get('/', function (req, res) {
   res.sendFile(path.join(__dirname + 'index.html'));
 });

});
