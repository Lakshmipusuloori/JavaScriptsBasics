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
var KFCAmerica = /** @class */ (function () {
    function KFCAmerica() {
    }
    KFCAmerica.prototype.getProduct = function () {
        console.log("KFC Product");
    };
    KFCAmerica.prototype.getLocation = function () {
        console.log("California");
    };
    return KFCAmerica;
}());
var KFCIndia = /** @class */ (function (_super) {
    __extends(KFCIndia, _super);
    function KFCIndia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KFCIndia.prototype.getLocation = function () {
        console.log("Hyderabad");
    };
    return KFCIndia;
}(KFCAmerica));
var KFCUK = /** @class */ (function (_super) {
    __extends(KFCUK, _super);
    function KFCUK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KFCUK.prototype.getLocation = function () {
        console.log("London");
    };
    return KFCUK;
}(KFCAmerica));
var kfc = new KFCIndia();
kfc.getLocation();
kfc.getProduct();
