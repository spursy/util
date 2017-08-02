const fs = require('fs');
const path = require('path');

fs.createReadStream('../../materialsFile/readFile.txt').pipe(process.stdout)


process.stdout.write('stdout !!!')