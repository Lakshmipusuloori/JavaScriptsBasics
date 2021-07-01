var Student = /** @class */ (function () {
    function Student(id, name) {
        id = id;
        name = name;
    }
    Student.prototype.getDetails = function () {
        console.log(this.id + "" + this.name);
    };
    return Student;
}());
var s = new Student(10, "Mahesh");
s.getDetails();
