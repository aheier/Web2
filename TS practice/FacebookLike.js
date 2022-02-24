"use strict";
exports.__esModule = true;
exports.FacebookLike = void 0;
var FacebookLike = /** @class */ (function () {
    function FacebookLike(_likeCount, _isLiked) {
        this._likeCount = _likeCount;
        this._isLiked = _isLiked;
    }
    FacebookLike.prototype.buttonPress = function () {
        if (!this._isLiked) {
            this._isLiked = true;
            this._likeCount++;
            return;
        }
        this._isLiked = false;
        this._likeCount--;
    };
    FacebookLike.prototype.getLikes = function () {
        return this._likeCount;
    };
    FacebookLike.prototype.isSelected = function () {
        return this._isLiked;
    };
    return FacebookLike;
}());
exports.FacebookLike = FacebookLike;
