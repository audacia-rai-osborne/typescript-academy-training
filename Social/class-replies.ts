interface iReplies{
    //properties
    id:number;
    dateUploaded:Date;
    content:any;
    userId:string;
    postId:string;
}


export class Replies implements iReplies{
    //properties
    id:number;
    dateUploaded:Date;
    content:any;
    userId:string;
    postId:string;

    //methods
    constructor(id:number, dateUploaded:Date, content:any, userId:string, postId:string){
        this.id = id;
        this.dateUploaded = dateUploaded;
        this.content = content
        this.userId = userId;
        this.postId = postId;
    }
}