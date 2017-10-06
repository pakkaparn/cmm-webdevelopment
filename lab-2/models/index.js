const Banner = require('./banner')
const ArticleCategory = require('./articleCategory')
const Contributor = require('./contributor')
const Article = require('./article')

Banner.sync().then(function() {
  console.log('Banner is synced.')
})

ArticleCategory.sync().then(function() {
  console.log('ArticleCategory is synced.')
})

Contributor.sync().then(function() {
  console.log('Contributor is synced.')
})

Article.sync().then(function() {
  console.log('Article is synced.')
})

ArticleCategory.hasMany(Article, {
  foreignKey: 'categoryId',
  as: 'articles',
  constraints: false
})

Article.belongsTo(Contributor, {
  foreignKey: 'contributorId',
  as: 'contributor',
  constraints: false
})

Article.belongsTo(ArticleCategory, {
  foreignKey: 'categoryId',
  as: 'category',
  constraints: false
})

Contributor.hasMany(Article, {
  foreignKey: 'contributorId',
  as: 'articles',
  constraints: false
})