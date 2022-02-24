export class FacebookLike{
    constructor(private _likeCount:number, private _isLiked:boolean){
    }

    onClick(){
        if(!this._isLiked){
            this._isLiked = true;
            this._likeCount++;
            return;
        }
        this._isLiked = false;
        this._likeCount--;
    }

    getLikes():number{
        return this._likeCount;
    }
    
    isSelected():boolean{
        return this._isLiked;
    }
}