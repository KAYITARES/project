export class Quote {
    public showAuthor:boolean;
    constructor(public sub:string,public title:string,public quotess:string,public author:string,public upvote:number=0,public downvote:number=0,public completeDate:Date){
        this.showAuthor=false
    }
}
