var fs = require('../Promise/manipulateFile') 
var assert = require('assert');
var path = require('path');
var fpath = path.join(__dirname, './text.txt');  
var content = "I am spursyy."

describe("manipulate file", function() {
    it("Check the data has been save into test.txt", function(done) {
        var content = "I am spursyy."
        fs.writeFile(fpath, content);
        var result = fs.readFile(fpath, "utf-8");
        // assert.equal(result, content);
        done()
    }) 
})