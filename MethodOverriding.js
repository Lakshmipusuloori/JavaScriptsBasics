var MOR = /** @class */ (function () {
    function MOR() {
    }
    MOR.prototype.getTest = function () {
        console.log("Calling Test Method in MOR Class");
    };
    return MOR;
}());
var MOR1 = /** @class */ (function () {
    function MOR1() {
    }
    MOR1.prototype.getTest = function () {
        console.log("Calling test Method in mOR1 class");
    };
    return MOR1;
}());
var m = new MOR1();
m.getTest();
