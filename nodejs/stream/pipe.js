// Method 1
// process.stdin.pipe(process.stdout)

// Method 2
process.stdin.setEncoding('utf-8')

process.stdin.on('readable', () => {
    let chunk = process.stdin.read()
    if (chunk !== null) {
        process.stdout.write(chunk)
    }
})

process.stdin.on('end', ()=> {
    process.stdout.write('End')
})


