/// <reference path="InternalModules.ts" />
var Docking;
(function (Docking) {
    var Dock = (function () {
        function Dock() {
            this.dockedShips = [];
        }
        Dock.prototype.arrival = function (ship) {
            this.dockedShips.push(ship);
        };
        return Dock;
    })();
    Docking.Dock = Dock;
})(Docking || (Docking = {}));

var dock = new Docking.Dock();

var Transport;
(function (Transport) {
    (function (Maritime) {
        (function (Shipping) {
            var privateVariable = 400;
        })(Maritime.Shipping || (Maritime.Shipping = {}));
        var Shipping = Maritime.Shipping;
    })(Transport.Maritime || (Transport.Maritime = {}));
    var Maritime = Transport.Maritime;
})(Transport || (Transport = {}));
var Transport;
(function (Transport) {
    (function (Maritime) {
        (function (Docking) {
            var privateVariable = 400;
        })(Maritime.Docking || (Maritime.Docking = {}));
        var Docking = Maritime.Docking;
    })(Transport.Maritime || (Transport.Maritime = {}));
    var Maritime = Transport.Maritime;
})(Transport || (Transport = {}));
var Transport;
(function (Transport) {
    (function (Railways) {
        (function (Ticketing) {
            var privateVariable = 400;
        })(Railways.Ticketing || (Railways.Ticketing = {}));
        var Ticketing = Railways.Ticketing;
    })(Transport.Railways || (Transport.Railways = {}));
    var Railways = Transport.Railways;
})(Transport || (Transport = {}));
