function concatenate(items, separator, beginAt, endAt) {
    if (typeof separator === "undefined") { separator = ","; }
    if (typeof beginAt === "undefined") { beginAt = 0; }
    if (typeof endAt === "undefined") { endAt = items.length; }
    var result = "";
    for (var i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1))
            result += separator;
    }
    ;
    return result;
}

var items = ["A", "B", "C"];
var result = concatenate(items);
console.log(result);

var partialResult = concatenate(items, '-', 1);
console.log(partialResult);
//# sourceMappingURL=DefaultParameters.js.map
