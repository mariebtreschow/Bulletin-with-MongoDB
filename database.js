'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/geo-post-app', function(err) {
   if (err) {
      console.log('Failed to connect to Mongo');
   } else {
      console.log('Successfully connected to Mongo!');
   }
});
