let db = require('../models');

//all articles
function index(req,res){
  db.Article.find({}, function (err, allArticles){
    console.log(allArticles);
    if (err){
      console.log('Error on GET All Articles: ', err);
    }
    res.json(allArticles)
  })
}

// GET /api/articles/:article_id
function show (req, res) {
  db.Article.findById(req.params.article_id, function(err, foundArticle) {
    if (err) {
      console.log('articleController.show error', err);
    }
    console.log('articleController.show responding with', foundArticle);
    res.json(foundArticle);
  });
}

//POST creating new article
function create (req, res) {
  db.Article.create(req.body, function(err, article){
    if (err){
      console.log('Error creating new article: ', err);
    }
    console.log('created article: ', article);
    res.json(article)
  })
}

//update article
function update (req, res){
  db.Article.findById(req.params.article_id, function (err, foundArticle){
    if (err){
      console.log('Error updating article: ', err);
    }
    foundArticle.title = req.body.title
    foundArticle.description = req.body.description
    foundArticle.save(function(err, savedArticle){
      if (err){
        console.log('Error saving updated article', err);
      }
      res.json(savedArticle)
    })
  })
}

//destroy
function destroy(req, res) {
	db.Article.remove({_id: req.params.article_id}, function(err, foundArticle){
		if (err){
      console.log('Error deleting article: ', err);
    }
		res.json('foundArticle');
	})
};


module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}
