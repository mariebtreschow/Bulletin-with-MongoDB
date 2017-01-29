'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-app', function(err) {
   if (err) {
      console.log('Failed to connect to Mongo');
      console.log(err);
   } else {
      console.log('Successfully connected to Mongo!');
   }
});
