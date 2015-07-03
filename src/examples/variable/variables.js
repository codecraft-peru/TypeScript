var isDone = true;

var age = 18;

var name = "Jorge";

var list = [1, 2, 3];

// other way declare list
var listGeneric = [1, 2, 3];

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;

var c = 0 /* Red */;

var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 1] = "Red";
    Color1[Color1["Green"] = 2] = "Green";
    Color1[Color1["Blue"] = 4] = "Blue";
})(Color1 || (Color1 = {}));
;

var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;

var colorName = Color[2];

var notSure = "1555";
notSure = 10;

function warUser() {
    // body...
    alert("this is my message warning");
}

var fn = warUser();
//# sourceMappingURL=variables.js.map
