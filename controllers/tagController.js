let db = require('../models');

function index(req, res){
  db.Article.findById(req.params.article_id, function(err, foundArticle){
    console.log("responding with tags", foundArticle.tags);
    res.json(foundArticle.tags)
  })
}

// GET /api/articles/:article_id/tags/:tag_id
function show (req, res) {
  db.Article.findById(req.params.article_id, function(err, foundArticle) {
    let tag_id = foundArticle.tags.id(req.params.tag_id)
    if (tag_id) {
      res.json(tag_id)
    }
    else {
      console.log("error: ", err);
    }
  });
}

//POST creating new tag
function create (req, res) {
  db.Article.findById(req.params.article_id, function(err, foundArticle){
    let newTag = new db.Tag({
      tagTitle: req.body.tagTitle
    })
    foundArticle.tags.push(newTag);
    foundArticle.save(function(err, savedArticle){
      console.log('New Tag Created: ', newTag);
      res.json(newTag)
    })
  })
}

//destroy
function destroy(req, res) {
  db.Article.findById(req.params.article_id, function(err, foundArticle){
    console.log(foundArticle);
    let correctTag = foundArticle.tags.id(req.params.tag_id);
    if (correctTag){
      correctTag.remove();
      foundArticle.save(function(err, saved){
        res.json({message: 'Tag Deleted!'});
      });
    }
    else {
      return console.log(err);
    }
  })
};


module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy
}
