const express = require('express'),
      pug = require('pug'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap')
      morgan = require('morgan'),
      mongo = require('mongodb'),
      assert = require('assert');


var app = express();
var url = 'mongodb://localhost:27017/mongo-app';
require('./database');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));


app.set('view engine', 'pug');

app.get('/messages', (req, res) => {
   var messageArray = [];
   mongo.connect(url, (err, db) => {
      var posts = db.collection('post').find();
      post.forEach(function(doc, err){
         messageArray.push(doc);
      }, function() {
         res.render('messages', { post: post });
      }).catch((error) => {
         console.log(error);
      });
   });
});

app.get('/post-message', (req, res) => {
   res.render('post');
});

app.post('/post-message', (req, res) => {
   var post = {
      title: req.body.title,
      content: req.body.content
   };
   mongo.connect(url, (err, db) => {
      db.collection('post').insertOne(post, function(err, result) {
         assert.equal(null, error);
         console.log('post inserted!');
      }).catch((error) => {
         console.log(error);
      });

   });
   res.redirect('messages');
});


app.listen( 3000, (req, res) => {
   console.log('App listening on 3000!');
   displayRoutes(app);
});
