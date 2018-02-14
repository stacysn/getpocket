//importing dependencies
let express = require('express'),
  mongoose = require('mongoose'),
  db = require('./models'),
  controllers = require('./controllers')

let app = express(),
  router = express.Router();

app.get('/api', controllers.api.index);


var port = process.env.API_PORT || 3001;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
