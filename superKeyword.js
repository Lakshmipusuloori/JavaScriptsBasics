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
var CarSr1 = /** @class */ (function () {
    function CarSr1() {
    }
    CarSr1.prototype.getColor = function () {
        console.log("Blue Color");
    };
    CarSr1.prototype.getEngine = function () {
        console.log("1500CC");
    };
    CarSr1.prototype.getAirbag = function () {
        console.log("Airbag is available in Automatic Variant");
    };
    return CarSr1;
}());
var CarSr2 = /** @class */ (function (_super) {
    __extends(CarSr2, _super);
    function CarSr2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CarSr2.prototype.getColor = function () {
        console.log("PearlWhite Color");
    };
    CarSr2.prototype.getEngine = function () {
        console.log("1800CC");
    };
    CarSr2.prototype.getAirbag = function () {
        console.log("Airbag is available in Manual and Automatic Variant");
    };
    CarSr2.prototype.getTemplate = function () {
        this.getColor();
        _super.prototype.getEngine.call(this);
        this.getAirbag();
    };
    return CarSr2;
}(CarSr1));
var car = new CarSr2();
car.getTemplate();
