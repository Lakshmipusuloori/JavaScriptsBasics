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
var rbiBank = /** @class */ (function () {
    function rbiBank() {
    }
    rbiBank.prototype.getRBIinterest = function () {
        console.log(" RBI interest");
    };
    rbiBank.prototype.getAffilation = function () {
        console.log("Afflilated by RBI");
    };
    return rbiBank;
}());
var SBIbank = /** @class */ (function (_super) {
    __extends(SBIbank, _super);
    function SBIbank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SBIbank.prototype.getSBIinterest = function () {
        console.log(" SBI interest is 8%");
    };
    return SBIbank;
}(rbiBank));
var HDFCbank = /** @class */ (function (_super) {
    __extends(HDFCbank, _super);
    function HDFCbank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HDFCbank.prototype.getHDFCinterest = function () {
        console.log("HDFC interest is 9%");
    };
    return HDFCbank;
}(rbiBank));
var ICICIbank = /** @class */ (function (_super) {
    __extends(ICICIbank, _super);
    function ICICIbank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ICICIbank.prototype.getICICIinterest = function () {
        console.log("ICICI interest is 10%");
    };
    return ICICIbank;
}(rbiBank));
var sbi = new SBIbank();
sbi.getSBIinterest();
sbi.getAffilation();
var hdfc = new HDFCbank();
hdfc.getHDFCinterest();
hdfc.getAffilation();
var icici = new ICICIbank();
icici.getICICIinterest();
icici.getAffilation();
