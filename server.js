//importing dependencies
let express = require('express'),
  mongoose = require('mongoose'),
  db = require('./models'),
  controllers = require('./controllers'),
  bodyParser = require('body-parser')
  cookieParser = require('cookie-parser')

let app = express(),
  router = express.Router();



  //to config API to use body body-parser and look for JSON in req.body
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(cookieParser());


//prevent CORS error
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

    //Remove caching
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });


app.get('/api', controllers.api.index);


//JSON API Endpoints for articles
app.get('/api/articles', controllers.article.index);
app.get('/api/articles/:article_id', controllers.article.show);
app.post('/api/articles', controllers.article.create);
app.put('/api/articles/:article_id', controllers.article.update);
app.delete('/api/articles/:article_id', controllers.article.destroy);


app.get('/api/articles/:article_id/tags', controllers.tag.index);
app.get('/api/articles/:article_id/tags/:tag_id', controllers.tag.show);
app.post('/api/articles/:article_id/tags', controllers.tag.create);
app.delete('/api/articles/:article_id/tags/:tag_id', controllers.tag.destroy);


var port = process.env.API_PORT || 3001;
app.listen(port, function() {
    console.log(`api running on ${port}`);
});
