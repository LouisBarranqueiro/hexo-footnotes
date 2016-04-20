var marked = require('marked');

/**
 * Filter to parse and render markdown footnotes
 * @param {String} string
 * @returns {String} string
 */
function footnotes(string) {
  var footnotes = [];
  var reFootnoteContent = /\[\^(\d+)\]: ?([\S\s]+?)(?:\[\^(?:\d+)\]|\n\n|$)/g;
  var reInlineFootnote = /\[\^(\d+)\]\((.+?)\)/g;
  var reFootnoteIndex = /\[\^(\d+)\]/g;
  var html = '';

  // threat all inline footnotes
  string = string.replace(reInlineFootnote, function(match, index, content) {
    footnotes.push({
      index: index,
      content: content
    });
    // remove content of inline footnote
    return '[^' + index + ']';
  });
  // threat all footnote contents
  string = string.replace(reFootnoteContent, function(match, index, content) {
    footnotes.push({
      index: index,
      content: content
    });
    // remove footnote content
    return '';
  });
  // render (HTML) footnotes reference
  string = string.replace(reFootnoteIndex,
    '<sup id="fnref:$1"><a href="#fn:$1" rel="footnote">$1</a></sup>');
  // sort footnotes by their index
  footnotes.sort(function(a, b) {
    return a.index - b.index;
  });
  // render footnotes (HTML)
  footnotes.forEach(function(footNote) {
    html += '<li id="fn:' + footNote.index + '">';
    html += marked(footNote.content);
    html += '<a href="#fnref:' + footNote.index + '" rev="footnote">↩</a>';
    html += '</li>';
  });
  // add footnotes at the end of the post content
  if (footnotes.length) {
    content += '<div id="footnotes"><hr>';
    content += '<div id="footnotelist"><ol>' + html + '</ol></div>';
    content += '</div>';
  }

  return string;
}

module.exports = footnotes;
