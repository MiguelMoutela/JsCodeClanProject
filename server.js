const express = require('express');
const parser = require('body-parser');
const server = express();
const request = require('request');
const MongoClient= require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

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

  server.get('/api/citysearch/:city/:category/:pageNumber', function(req,res) {
    const url = `http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&location=${req.params.city}&category=${req.params.category}&date=Future&page_number=${req.params.pageNumber};`

    request(url, function(error, response, body) {
      if(error) {
        res.status(500);
        res.send();
        return;
      }
      res.send(body);
    });
  });

  server.get('/api/aroundMeSearch/:lat/:lng/:radius/:category/:pageNumber', function(req,res) {
    const url = `http://api.eventful.com/json/events/search?app_key=ZpGXZc399XdxLZG9&where=${req.params.lat},${req.params.lng}&within=${req.params.radius}&category=${req.params.category}&date=Future&page_number=${req.params.pageNumber}`;
    request(url, function(error, response, body) {
      if(error) {
        res.status(500);
        res.send();
        return;
      }
      res.send(body);
    });
  });

  server.post('/api/EventWishList', function(req,res){
    db.collection('events').insert(req.body, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      console.log('Saved to database');
      res.status(201);
      res.json(result.ops[0]);
    });
  });

  server.get('/api/EventWishList', function(req, res){
    db.collection('events').find().toArray(function(err,result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.json(result);
    });
  });

  server.delete('/api/EventWishList', function(req, res){
    db.collection('events').remove({},function(err,result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.status(204);
      res.send();
    })
  })

  server.delete('/api/EventWishList/:id', function(req, res){
    db.collection('events').remove({_id:new ObjectID(req.params.id)},function(err,result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
        return;
      }
      res.status(204);
      res.send();
    })
  })

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
});
