let mongoose = require('mongoose'),
    Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: String,
    description: String
});

let Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
