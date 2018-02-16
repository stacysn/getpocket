let mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Tag = require('./tag')

let ArticleSchema = new Schema ({
  title: String,
  tags: [Tag.schema]
})

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
