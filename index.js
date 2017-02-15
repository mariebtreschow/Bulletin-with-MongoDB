const express = require('express'),
      pug = require('hbs'),
      bodyParser = require('body-parser'),
      displayRoutes = require('express-routemap')
      morgan = require('morgan'),
      mongo = require('mongodb'),
      methodOverride = require('method-override'),
      assert = require('assert');

var MongoClient = require('mongodb').MongoClient;

//var collection = mongo.DB.collection('post');
var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
   var post = db.collection('post').find().toArray(function(err, results) {
      console.log(results);
      res.render('show');
   });
});

app.get('/new', (req, res) => {
   res.render('new');
});

app.post('/new', (req, res) => {
   db.collection('post').save(req.body, (err, result) => {
      res.redirect('/');
   });
});


MongoClient.connect("mongodb://localhost:27017/mongo-app", function(err, database) {
   if(err) return console.log(err);
   db = database
   app.listen( 3000, (req, res) => {
      console.log('App listening on port 3000!');
      console.log("Successfully connected to Mongo!");
      displayRoutes(app);
   });
});
