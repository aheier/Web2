import {FacebookLike} from "./FacebookLike";

let l = new FacebookLike(3, false);

likeStatus(l);
l.onClick()
likeStatus(l);
l.onClick()
likeStatus(l);
l.onClick()
likeStatus(l);



function likeStatus(l:FacebookLike){
    console.log("Like count " + l.getLikes() + " Selected? " + l.isSelected());
}