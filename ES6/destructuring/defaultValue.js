var {x = 3} = {};
x // 3

var {x, y = 5} = {x: 1};
x // 1
y // 5