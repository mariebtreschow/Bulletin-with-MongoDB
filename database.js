'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/geo-post-app', function(err) {
   if (err) {
      console.log('Failed to connect to Mongo');
   } else {
      console.log('Successfully connected to Mongo!');
   }
});

new mongoose.Schema = ({
   name: String,
   completed: Boolean
});

var model = mongoose.model('User', userSchema);


module.export = model;
