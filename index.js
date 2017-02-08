const express = require('express'),
      pug = require('hbs'),
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
   } else {
      console.log("Failed to connect to Mongo")
   }
});

var app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
 res.render('show');
});

app.get('/new', (req, res) => {
   res.render('new');
});

app.post('/new', (req, res) => {
   //post message to mongoDB
});


app.listen( 3000, (req, res) => {
   console.log('App listening on port 3000!');
   displayRoutes(app);
});
