export class Quote {
    public showDescription:boolean;
    constructor(public name:string,public id:string,public description:string,public completeDate:Date){
        this.showDescription=false
    }
}
