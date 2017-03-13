/**
 * Created by Alankritha on 3/7/17.
 */
var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactList',['contactList']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

app.get('/contactList',function(req,res){
    console.log("I received GET request");

    db.contactList.find(function(err,docs){
        console.log(docs);
        res.json(docs);
    })
});

app.post('/contactList',function(req,res){
    console.log(req.body);
    db.contactList.insert(req.body,function(err,doc){
        res.json(doc);
    })
});

app.delete('/contactList/:id', function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contactList.remove({_id:mongojs.ObjectId(id)}, function(err,doc){
        res.json(doc);
    })
});

app.get('/contactList/:id',function(req,res){
    var id = req.params.id;
    console.log(id);
    db.contactList.find({_id:mongojs.ObjectId(id)}, function(err,doc) {
        res.json(doc);
    })
});

app.listen(3000);
console.log("server running on port 3000");