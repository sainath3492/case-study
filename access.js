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
var X = /** @class */ (function () {
    function X() {
        this.b1 = "BB";
        this.b2 = 300;
        this.b3 = "B3";
        this.b4 = 6000;
        console.log("inside b c0ntructor");
    }
    X.prototype.fnb = function () {
        console.log("inside fnb, class B", this.b1, this.b2, this.b3);
    };
    return X;
}());
var Y = /** @class */ (function (_super) {
    __extends(Y, _super);
    function Y() {
        var _this = _super.call(this) || this;
        _this.a1 = "AA";
        _this.a2 = 200;
        console.log("Inside A's Constructor");
        return _this;
    }
    Y.prototype.fna = function () {
        console.log("Inside fna, class A", this.b2, this.b3);
    };
    return Y;
}(X));
var Z = /** @class */ (function (_super) {
    __extends(Z, _super);
    function Z() {
        var _this = _super.call(this) || this;
        _this.x1 = "AA";
        _this.x2 = 200;
        console.log("Inside Z's Constructor");
        return _this;
    }
    Z.prototype.fnz = function () {
        _super.prototype.fnb.call(this);
        console.log("Inside fna, class A", this.b2, this.b3);
    };
    return Z;
}(Y));
var c = new Y();
var b = new Z();
c.fna();
b.fnz();
console.log("public specified", c.b3);
