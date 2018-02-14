let db = require("./models");

let articleList = [
  {
    title: 'Apple Music Expands',
    description: 'more music, more competition'
  },
  {
    title: 'Facebook Has New Lists Feature',
    description: '',
  },
  {
    title: 'Smartwatch for Kids',
    description: 'can track their sleep and location'
  }
]


  db.Article.remove({}, function(err, removedArticles){
    articleList.forEach(function (ele){
      //create a Project in the DB post
      let newArticle = {
        title: ele.title,
        description: ele.description,
      }
      console.log('Each Article', newArticle);

      db.Article.create(newArticle, function(err, savedArticle){
        if (err){
          console.log('Error saving seed article: ', err);
        }
        console.log('Saved seed article: ', savedArticle);
      })
    })
  })
