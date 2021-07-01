var Demo2 = /** @class */ (function () {
    function Demo2() {
    }
    Demo2.prototype.getDetails3 = function () {
        console.log("Calling Details3 Method");
    };
    return Demo2;
}());
var Demo //class
 = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.getDetais = function () {
        console.log("Calling Detail Method ");
    };
    Demo.prototype.getDetails2 = function () {
        console.log("Calling Details Method");
    };
    return Demo;
}());
//let ref = new ClassName(); //object
//ref.particularMethod
var d = new Demo();
d.getDetais();
d.getDetails2();
var d1 = new Demo2();
d1.getDetails3();
