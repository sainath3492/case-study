var A = /** @class */ (function () {
    function A(x1, x2) {
        this.x1 = x1;
        this.x2 = x2;
    }
    A.prototype.fn = function () {
        console.log("Inssdfsdg", this.x1, this.x2);
        return "3423423";
    };
    return A;
}());
var a = new A(200, "AAA");
a.fn();
