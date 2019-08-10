export class Quote {
    showDetails:boolean;
    constructor(public id:number, public quote:string, public author:string, public name:string, public dateCreated:Date){
        this.showDetails=false;
    }
}
