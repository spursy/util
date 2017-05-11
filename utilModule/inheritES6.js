const EventEmitter = require('events');

class MyStream extends EventEmitter {
  constructor() {
    super();
  }
  write(data) {
    this.emit('data', data);
  }
}

const stream = new MyStream();

stream.on('data', (data) => {
  console.log(`sytem has received："${data}"`);
});
stream.write('use ES6');