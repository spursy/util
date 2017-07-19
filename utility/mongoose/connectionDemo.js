const mongoose = require('mongoose');
var db = mongoose.createConnection('localhost', 'myblog');

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log(`connection successfully.`);

    const PersonSchema = new mongoose.Schema({
        name: String
    });
    const PersonModel = db.model('Person', PersonSchema);

    var personEntity = new PersonModel({name: "Kity"});
    console.log(personEntity.name);
    personEntity.save();
})
