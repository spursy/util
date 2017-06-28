function Student() {
    var name;
    return {
        set: function(name) {
            this.name = name;
        },
        get: function() {
            return this.name;
        }
    }
}

var student = new Student();
student.set("Spursy");
var name = student.get();
console.log(name);
