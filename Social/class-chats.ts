import { question } from "readline-sync";
import { chatScreen, replyList } from "./program";

interface iChats{
    //properties
    id:string;
    userId:string;
}

export class Chats implements iChats{
    //properties
    id:string;
    userId:string;

    //methods
    constructor(id:string, userId:string){
        this.id = id;
        this.userId = userId;
    }
    //functions
    viewChat(){
        var user = question("What is your username?" )
        var chatToView = question("Who would you like to view chats with? ")
        var chatId = user+chatToView
        for (let i=0; i < replyList.length; i++){
            while(replyList[i].postId === chatId){
                console.log(replyList[i].content)
                break;
                  } 
        } 
        chatScreen()
        }
    }


//message --
//save message with chatId in replies 
