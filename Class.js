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
var B = /** @class */ (function () {
    function B() {
        this.b1 = "B1";
        this.b2 = 3999;
        this.b3 = "B3";
        console.log("Inside B's Const");
    }
    B.prototype.fn2 = function () {
        console.log("Inside Class b Function2");
    };
    return B;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A(a1, a2, a3) {
        var _this = _super.call(this) || this;
        _this.x1 = "A";
        _this.x3 = 200;
        _this.x1 = a1;
        _this.x2 = a3;
        _this.x3 = a2;
        console.log("Inside class a, inside constructor", _this.x1, _this.x2);
        console.log("Values", a1, a2, a3);
        return _this;
    }
    A.prototype.fn = function () {
        console.log("Inside fn");
        console.log("values", this.b1, this.b2, this.b3);
        _super.prototype.fn2.call(this);
    };
    return A;
}(B));
var a = new A("SA", 100, "CCC");
a.fn();
