// /*1:声明变量*/
// var num1, num2;
// /*2：向屏幕输出，提示信息，要求输入num1*/
// process.stdout.write('Please input num1 value：');
// /*3：监听用户的输入*/
// process.stdin.on('data', function (chunk) {
//     if (!num1) {
//         num1 = Number(chunk);
//         /*4：向屏幕输出，提示信息，要求输入num2*/
//         process.stdout.write('Please input num2 value：');
//     } else {
//         num2 = Number(chunk);
//         process.stdout.write('The total result is：' + (num1 + num2));
//     }
// });


process.stdin.pipe(process.stdout);