var path = require('path');
var fpath = path.join(__dirname, './test.txt');  
// var manipulateFile = require('./manipulateFile');
var manipulateFile = require('../Promise/manipulateFile');

// (async() => {
//     await manipulateFile.writeFile(fpath, "I am 123.", function (err, content) {
//          console.log(1)
//          console.log(err);
//          console.log(content);
//     });
//     var content = await manipulateFile.readFile(fpath,  function (err, content) {
//          console.log(2)
//          console.log(err);
//          console.log(content.toString());
//     });
// })()

//  async function   manipulateFile1() {
//      await manipulateFile.writeFile(fpath, "I am spursy.",function (err, content) {
//         console.log(1)
//         console.log(err);
//         console.log(content);
//     });
//     var content = await manipulateFile.readFile(fpath, function (err, content) {
//         console.log(2)
//         console.log(err);
//         console.log(content.toString());
//     });
// }

// manipulateFile1() ;

(async() =>
    await manipulateFile.writeFile(fpath, "I am 231123123.").then(function(data) {
        console.log(1)
    })


    // manipulateFile.readFile(fpath).then(function(data) {
    //     console.log(2)
    //     console.log(data.toString())
    // })
)()