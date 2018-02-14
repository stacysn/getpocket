//importing dependencies
let express = require('express'),
  mongoose = require('mongoose'),
  db = require('./models'),
  controllers = require('./controllers')

let app = express(),
  router = express.Router();

app.get('/api', controllers.api.index);


//JSON API Endpoints for articles
app.get('/api/articles', controllers.article.index);
app.get('/api/articles/:article_id', controllers.article.show);
app.post('/api/articles', controllers.article.create);
app.put('/api/articles/:article_id', controllers.article.update);
app.delete('/api/articles/:article_id', controllers.article.destroy);


var port = process.env.API_PORT || 3001;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
