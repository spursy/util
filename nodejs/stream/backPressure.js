function writeOneMillions(writer, data, encoding,  callback) {
    var i = 100
    write()
    function write() {
        let Ok = true
        do {
            if (i == 0) {
                writer.write(data, encoding, callback)
            } else {
                // if Ok is false, continue to work throw setting drain event.
                Ok = writer.write(data, encoding)
            }
        } while(i >= 0 && Ok)
        if (i > 0) {
            writer.once('drain', write)
        }
    }
}

writeOneMillions(process.stdout, "123", 'utf-8', () => {
    console.log(`writer end!`);
})