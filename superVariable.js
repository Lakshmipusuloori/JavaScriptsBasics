var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cr1 = /** @class */ (function () {
    function Cr1() {
    }
    Cr1.prototype.getDetails = function () {
        this.clr1 = "blue";
    };
    return Cr1;
}());
var Cr2 = /** @class */ (function (_super) {
    __extends(Cr2, _super);
    function Cr2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clr = "pearl white";
        return _this;
    }
    Cr2.prototype.getColor = function () {
        console.log(_super.prototype.clr1);
    };
    return Cr2;
}(Cr1));
var cr = new Cr2();
cr.getColor();
