"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Item.prototype, "Id", {
        get: function () { return this.id; },
        set: function (id) { this.id = id; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Name", {
        get: function () { return this.name; },
        set: function (name) { this.name = name; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "Price", {
        get: function () { return this.price; },
        set: function (price) { this.price = price; },
        enumerable: false,
        configurable: true
    });
    Item.prototype.showItemInfo = function () {
        console.log("ID: " + this.id + " | Name: " + this.name +
            " | Price: " + this.price);
    };
    return Item;
}());
exports.Item = Item;
