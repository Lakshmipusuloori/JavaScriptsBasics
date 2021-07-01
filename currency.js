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
var country = /** @class */ (function () {
    function country() {
    }
    country.prototype.getcountry = function () {
        console.log("Get the country");
    };
    return country;
}());
var India = /** @class */ (function (_super) {
    __extends(India, _super);
    function India() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    India.prototype.getIndiacurrency = function () {
        console.log("india's currency is INR");
    };
    return India;
}(country));
var America = /** @class */ (function (_super) {
    __extends(America, _super);
    function America() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    America.prototype.getAmericacurrency = function () {
        console.log("America currency is Dollar");
    };
    return America;
}(country));
var Europe = /** @class */ (function (_super) {
    __extends(Europe, _super);
    function Europe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Europe.prototype.getEuropecurrency = function () {
        console.log("Europe currency is EURO");
    };
    return Europe;
}(country));
var Am = new America();
Am.getAmericacurrency();
var Ind = new India();
Ind.getcountry();
Ind.getIndiacurrency();
var eur = new Europe();
eur.getcountry();
eur.getEuropecurrency();
