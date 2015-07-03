function getAverage() {
    var a = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        a[_i] = arguments[_i + 0];
    }
    var total = 0;
    for (var i = 0; i < a.length; i++) {
        total += a[i];
    }
    ;
    var average = total / a.length;
    return "the average is " + average;
}

var result = getAverage(10, 15, 20);
console.log(result);
//# sourceMappingURL=RestParameters.js.map
