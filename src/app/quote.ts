export class Quote {
    public showAuthor:boolean;
    constructor(public title:string,public quote:string,public author:string,public upvote:string,public completeDate:Date){
        this.showAuthor=false
    }
}
