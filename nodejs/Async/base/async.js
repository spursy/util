function person() {
    this.think = function(callback) {
        setTimeout(function() {
            console.log('I am thinking ~~~~');
            callback();
        }, 5000);
    }
    this.answer = function() {
        console.log('I can answer directly.');
    } 
}

var p = new person();
p.think(function() {
    console.log('I will think some time.');
})
p.answer();
