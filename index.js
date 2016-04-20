var footnotes = require('./lib/footnotes');

// Register footnotes filter
hexo.extend.filter.register('before_post_render', function(data) {
  return footnotes(data);
});
