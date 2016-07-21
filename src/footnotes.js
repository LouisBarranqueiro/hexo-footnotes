'use strict';

var md = require('markdown-it')({
  // allow HTML tags
  html: true
});

/**
 * Render markdown footnotes
 * @param {String} text
 * @returns {String} text
 */
function renderFootnotes(text) {
  var footnotes = [];
  var reFootnoteContent = /\[\^(\d+)\]: ?([\S\s]+?)(?=\[\^(?:\d+)\]|\n\n|$)/g;
  var reInlineFootnote = /\[\^(\d+)\]\((.+?)\)/g;
  var reFootnoteIndex = /\[\^(\d+)\]/g;
  var html = '';

  // threat all inline footnotes
  text = text.replace(reInlineFootnote, function(match, index, content) {
    footnotes.push({
      index: index,
      content: content
    });
    // remove content of inline footnote
    return '[^' + index + ']';
  });
  // threat all footnote contents
  text = text.replace(reFootnoteContent, function(match, index, content) {
    footnotes.push({
      index: index,
      content: content
    });
    // remove footnote content
    return '';
  });
  // render (HTML) footnotes reference
  text = text.replace(reFootnoteIndex,
    '<sup id="fnref:$1"><a href="#fn:$1" rel="footnote">$1</a></sup>');
  // sort footnotes by their index
  footnotes.sort(function(a, b) {
    return a.index - b.index;
  });
  // render footnotes (HTML)
  footnotes.forEach(function(footNote) {
    html += '<li id="fn:' + footNote.index + '">';
    html += '<span style="display: inline-block; vertical-align: top; padding-right: 10px;">';
    html += footNote.index;
    html += '.</span>';
    html += '<span style="display: inline-block; vertical-align: top;">';
    html += md.renderInline(footNote.content.trim());
    html += '</span>';
    html += '<a href="#fnref:' + footNote.index + '" rev="footnote"> ↩</a>';
    html += '</li>';
  });
  // add footnotes at the end of the content
  if (footnotes.length) {
    text += '<div id="footnotes">';
    text += '<hr>';
    text += '<div id="footnotelist">';
    text += '<ol style="list-style:none; padding-left: 0;">' + html + '</ol>';
    text += '</div></div>';
  }
  return text;
}

module.exports = renderFootnotes;
