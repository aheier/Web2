"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Object.defineProperty(Point.prototype, "X", {
        set: function (x) { this.x = x; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Point.prototype, "Y", {
        set: function (y) { this.y = y; },
        enumerable: false,
        configurable: true
    });
    ;
    Point.prototype.draw = function () {
        console.log("X:" + this.x + " Y:" + this.y);
    };
    return Point;
}());
exports.Point = Point;
