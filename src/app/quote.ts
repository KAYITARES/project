export class Quote {
    public showAuthor:boolean;
    constructor(public title:string,public quotes:string,public author:string,public upvote:string,public completeDate:Date){
        this.showAuthor=false
    }
}
