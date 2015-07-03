var VehiculeType;
(function (VehiculeType) {
    VehiculeType[VehiculeType["PedalCycle"] = 0] = "PedalCycle";
    VehiculeType[VehiculeType["MotorCycle"] = 1] = "MotorCycle";
    VehiculeType[VehiculeType["Car"] = 2] = "Car";
    VehiculeType[VehiculeType["Bus"] = 3] = "Bus";
    VehiculeType[VehiculeType["Van"] = 4] = "Van";
    VehiculeType[VehiculeType["Lorry"] = 5] = "Lorry";
})(VehiculeType || (VehiculeType = {}));
var type = 5 /* Lorry */;

var name = VehiculeType[type];

console.log(name + ": " + type);

var BoxSize;
(function (BoxSize) {
    BoxSize[BoxSize["Small"] = 0] = "Small";
    BoxSize[BoxSize["Medium"] = 1] = "Medium";
})(BoxSize || (BoxSize = {}));
var BoxSize;
(function (BoxSize) {
    BoxSize[BoxSize["Large"] = 2] = "Large";
    BoxSize[BoxSize["XLarge"] = 3] = "XLarge";
    BoxSize[BoxSize["XXLarge"] = 4] = "XXLarge";
})(BoxSize || (BoxSize = {}));

console.log(BoxSize);
console.log(BoxSize);
