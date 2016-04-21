var content = [
  'hey buddy, it\'s a test[^1]',
  'here is an inline footnote[^2](inline footnote)',
  'and another one[^3]',
  'and another one[^4]',
  '[^1]: basic footnote content',
  '[^3]: paragraph\nfootnote\ncontent',
  '',
  '[^4]: footnote content with some [markdown](https://en.wikipedia.org/wiki/Markdown)4'
].join('\n');

module.exports = content;

