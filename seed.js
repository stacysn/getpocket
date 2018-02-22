var db = require('./models');

var articleList = [];

articleList.push({
  title: "Apple Music Expands",
  tags: [
    {
     tagTitle: "tech"
    },
    {
      tagTitle: "apple"
    }
  ]
});

articleList.push({
  title: "Facebook Has New List Feature",
  tags: [
    {
      tagTitle: "tech"
    },
    {
      tagTitle: "social media"
    }
  ]
});

//restart seed to clear database
db.Article.remove({}, function(err, article) {
  console.log('removed all articles');
  db.Article.create(articleList, function(err, article) {
      if (err) {
        console.log('ERROR', err);
        return;
      }
      console.log("recreated ", article.length, " articles");
      console.log("all articles: ", article);
      process.exit();
  });
})
