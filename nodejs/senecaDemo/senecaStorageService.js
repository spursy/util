'use strict'
module.exports = function() {
    (async() => {
        await this.add({role: "employee", cmd: 'add'}, function(msg, respond) {
        console.log("add plus")
        this.make('employee').data$(msg.data).save$(respond);
    })
    })() 
    

    this.add({role: "employee", cmd: "find"}, function (msg, respond) {
        console.log("get plus")
        console.log("id:::"+msg.id)
        this.make('employee').list$({name: "David"}, respond)

        console.log("respond::::" + respond)

    })
}





