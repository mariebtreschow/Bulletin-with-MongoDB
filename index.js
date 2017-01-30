const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap')
      morgan = require('morgan'),
      mongo = require('mongodb'),
      methodOverride = require('method-override'),
      assert = require('assert');

var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/mongo-app", function(err, db) {
   if(!err) {
      console.log("Successfully connected to Mongo!");
   }
});

var app = express();
var url = 'mongodb://localhost:27017/mongo-app';
require('./database');
require('./seed');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'pug');

app.get('/messages', (req, res) => {
//   var messageArray = [];
//   mongo.connect(url, (err, db) => {
//   var posts = db.collection('post').find();
//   post.forEach(function(doc, err){
//      messageArray.push(doc);
//      db.close();
//      }, function() {
//         res.render('messages', { title: title });
//      }).catch((error) => {
//         console.log(error);
//      });
//   });
});


app.get('/new', (req, res) => {
   res.render('post-message');
});

app.post('/new', (req, res) => {
//   var post = {
//      title: req.body.title,
//      content: req.body.content
//   };
//   mongo.connect(url, (err, db) => {
//      db.collection('post').insertOne(post, function(err, result) {
//         assert.equal(null, error);
//         console.log('post inserted!');
//      }).catch((error) => {
//         console.log(error);
//      });
//
//   });
//   res.redirect('messages');
});


app.listen( 3000, (req, res) => {
   console.log('App listening on port 3000!');
   displayRoutes(app);
});
