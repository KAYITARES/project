export class Quote {
    public showAuthor:boolean;
    constructor(public sub:string,public title:string,public quotess:string,public author:string,public completeDate:Date){
        this.showAuthor=false
    }
}
