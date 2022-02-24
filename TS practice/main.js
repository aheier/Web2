"use strict";
exports.__esModule = true;
var FacebookLike_1 = require("./FacebookLike");
var l = new FacebookLike_1.FacebookLike(3, false);
likeStatus(l);
l.buttonPress();
likeStatus(l);
l.buttonPress();
likeStatus(l);
l.buttonPress();
likeStatus(l);
function likeStatus(l) {
    console.log("Like count " + l.getLikes() + " Selected? " + l.isSelected());
}
