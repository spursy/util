
var xss = require('xss');
// var html = xss('<script>alert("xss");</script>');

// var options = {};  // Custom rules 
// var html = xss('<script>alert("xss");</script>', options);

// var options = {};  // Custom rules 
// var myxss = new xss.FilterXSS(options);
// // then apply myxss.process() 
// var html = myxss.process('<script>alert("xss");</script>');

var options = {
  whiteList: {
    a: ['href', 'title', 'target']
  }
};
var myxss = new xss.FilterXSS(options);
// then apply myxss.process() 
// var html = myxss.process('<a href="#" onclick="hello()"><i>Hello</i></a>');
// console.log(html);

// var html = xss('<a href="#" onclick="hello()"><i>Hello</i></a>');
// console.log(html);

var filterHtml = xss('<script>alert("xss");</script>');
console.log(filterHtml);


function escapeHtml (html) {

    var count = html.split('&lt').
    console.log({count: count})
    for (var i = 0; i <= count; i ++) {
        html.replace('&lt;', '<').replace('&gt;', '>');
    }
    return html;
}
var html = escapeHtml(filterHtml)
console.log(html)
