var i = 100;
console.log("i", i);
function f2(x, y, z) {
    console.log("Inside fn2", x, y);
    if (z != undefined) {
        console.log("z", z);
    }
}
f2(1, 2, "hai");
function f3(x, y, z) {
    if (z === void 0) { z = 100; }
    console.log(x, y, z);
}
f3(1, 2);
f3(2, 4, 300);
function fnts(x, y, z) {
    return x + y + z;
}
var t = fnts(23, 45, 66);
console.log("t:", t);
function tdf(a, b) {
}
function fnts56(a, b) {
    var cc = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        cc[_i - 2] = arguments[_i];
    }
    console.log("Inside fnts56", a, b, cc);
}
fnts56(10, 29, 45, 56, 78);
function fnts567(a, b) {
    var aa = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        aa[_i - 2] = arguments[_i];
    }
    console.log("Inside fn", a, b, aa);
    var i;
    for (i = 0; i < aa.length; i++) {
        console.log("Inside loop", i, aa[i]);
    }
}
fnts567(10, 29, 45, 56, 78);
var hello = function (a, b) {
    console.log("Inside helo", a, b);
    return a + b;
};
hello(10, 20);
var hello2 = function (a, b) {
    console.log("Inside helo", a, b);
    return a + b;
};
hello2(10, 20);
var hello3 = function () { console.log("Hi, This is hello function"); };
hello3();
var hello4 = function (a, b, c) {
    console.log("a= , b=, c=", a, b, c);
};
hello4(300, 400, 500);
var hello5 = function (x) {
    console.log("Hello5", x);
};
hello5(55);
var abc = function (x) { return x / 5; };
console.log(abc(5000) * 40);
var show2 = function (a, b) {
    var aa = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        aa[_i - 2] = arguments[_i];
    }
    console.log("aa", aa);
    var i;
    for (i = 0; i < aa.length; i++) {
        console.log(1, aa[i]);
    }
};
show2(10, 5, 6, 7, 8, 5);
var xx = {
    x1: 100,
    x2: "aaa",
    x3: 3000
};
console.log(xx);
console.log(xx.x1);
var yy = {
    xx1: 100,
    xx2: "sainath"
};
console.log("yyy", yy);
var xx2 = {
    aa1: 100
};
xx2.aa2 = "dggfsdgdf";
console.log(xx2.aa2);
var cc = {};
cc.hallmark = 200;
cc.test = 300;
console.log(cc);
//objects
var obj2 = {
    xx1: "value1",
    xx2: "value2",
    xx3: "value3",
    xx4: function () { },
    xx5: ["x", "y"]
};
obj2.xx4 = function () {
    console.log("hi" + obj2.xx3);
};
console.log(obj2.xx4());
var tt = {
    xx1: "team1",
    xx2: "team2"
};
var x = function (obj) {
    console.log("anonymous function", obj.xx1);
    console.log("anonymous function", obj.xx2);
};
x(tt);
x({ xx1: "Team11", xx2: "team21" });
