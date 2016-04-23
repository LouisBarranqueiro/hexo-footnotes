/* eslint-disable no-unused-vars */
var should = require('chai').should();
/* eslint-enable no-unused-vars */
var fixtures = require('./fixtures');
var footnotes = require('./../src/footnotes');

describe('footnotes', function() {
  it('render', function() {
    var content = footnotes(fixtures);
    content.should.equal('hey buddy, it\'s a test' +
      '<sup id="fnref:1"><a href="#fn:1" rel="footnote">1</a></sup>' +
      '\nhere is an inline footnote' +
      '<sup id="fnref:2"><a href="#fn:2" rel="footnote">2</a></sup>' +
      '\nand another one' +
      '<sup id="fnref:3"><a href="#fn:3" rel="footnote">3</a></sup>' +
      '\nand another one<sup id="fnref:4"><a href="#fn:4" rel="footnote">4</a></sup>' +
      '\n\n\n' +
      '<div id="footnotes"><hr><div id="footnotelist"><ol>' +
      '<li id="fn:1">basic footnote content<a href="#fnref:1" rev="footnote"> ↩</a></li>' +
      '<li id="fn:2">inline footnote<a href="#fnref:2" rev="footnote"> ↩</a></li>' +
      '<li id="fn:3">paragraph\nfootnote\ncontent<a href="#fnref:3" rev="footnote"> ↩</a></li>' +
      '<li id="fn:4">footnote content with some ' +
      '<a href="https://en.wikipedia.org/wiki/Markdown">markdown</a>' +
      '4<a href="#fnref:4" rev="footnote"> ↩</a></li></ol></div></div>');
  });
});
