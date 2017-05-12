var finder = require('./recursionSync');

try {
    var results = finder.findSync(/util*./, 'D:\nodejs\nodejs Snippets');
    console.log(results);
} catch(err) {
    console.error(err);
}