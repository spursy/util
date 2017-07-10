/**
 * Demo 1,
 * if previous await is failed, the later one will not allow to perform.
 */
async function getName() {
    await Promise.reject('rejected due to error.');
    return await Promise.resolve('Spursy');  // 这一步不会被执行
}

getName().then(result => {
    console.log(`${result}`);
}).catch(err => {
    console.log(`${err}`);
})

/**
 * catch exception.
 */
async function getNameOne() {
    await Promise.reject('Rejected due to error.').catch(error => console.log(`${error}`)); // catch error message.
    return await Promise.resolve('Spursy');
}

getNameOne().then(
    (result) => {
        console.log(`${result}`);
    }
).catch(
    (error) => {
        console.error('${error}');
    }
);