import { question } from "readline-sync";
import { date, mainScreen, postScreen } from "./program";
export let postList:posts[] = [];
let postsBookmarked: BookmarkedPosts[] = []
let postsLiked: LikedPosts[] = []
let trackingUsersBookmarks:string[] = []
let trackingUsersLikes:string[] = []

export interface iposts{
    //properties
    content:any;
    dateCreated:Date;
    username: string;
    userId:number;
    id:number;

    //methods
    // setUp(id:number, content:any, dateCreated:Date, username:string, userId:number);
}

export class posts implements iposts{
    //fields
    content:any;
    dateCreated:Date;
    username:string;
    userId:number;
    id:number;

    //constructor
    constructor(content:any, dateCreated:Date, username:string, userId:number, postId:number){
        this.content = content;
        this.dateCreated = dateCreated;
        this.username = username;
        this.userId = userId;
        this.id = postId;
    }

    //functions
    outputMyPosts(){
        var userPoststoOutput = question("What is the username of the user whose posts you'd like to look at? ")
        for (let i=0; i<postList.length; i++){
            while(postList[i].username === userPoststoOutput){
                console.log(postList[i].id + ' ' + postList[i].content)
                break;
                  } 
        } 
        this.deletePosts()    
    }

    deletePosts(){
    var response:string = question("Would you like to delete any posts? y/n ")
            if(response === "y"){
                var userPoststoDelete = parseInt(question("What is the id of the post you would like to delete? "))
                for (let i=0; i < postList.length; i++){
                    if(postList[i].id === userPoststoDelete){
                    postList.splice(i,1)
                    console.log("Your chosen post has been deleted")
                    postScreen()
                    console.log(postList)
                    break;
                }
                    }
           }else if (response ==="n"){
               this.editPosts()
            }
        }
    
        editPosts(){
            var response = question("Would you like to edit any posts? y/n ")
            if(response === "y"){
                //let userPostEditIndex = 0;
                var userPoststoEdit = parseInt(question("What is the id of the post you would like to edit? "))
                for (let i=0; i<postList.length; i++){
                    if(postList[i].id === userPoststoEdit){
                        var newContent = question("What would you like the post to say instead? ")
                        this.content = newContent;
                        console.log("Your chosen post has been edited to say " + '"' + postList[i].content + '"')
                        break;
                    }}
                    postScreen()
            }else if (response ==="n"){
                postScreen()
            }
        }


        outputAllPosts(){
            for (let i=0; i<postList.length; i++){
            console.log("Post id: " + postList[i].id + " User: " + postList[i].username + " Posted - " + postList[i].content)
            }
            var response = question("What would you like to do? 1 - Bookmark 2 - Unbookmark 3 - Like 4 - Unlike a post ");
            
            if (response === "1"){
                this.bookmarkAPost()
            }else if (response === "2"){
                this.unbookmarkAPost()
            }
            else if (response === "3"){
                this.likeAPost() 
            }else if (response === "4"){
                this.unlikeAPost()
            }
        }
        
        bookmarkAPost(){
                var bookmarkedPost = parseInt(question("What is the id of the post you'd like to bookmark? "))
                let newBookmark: BookmarkedPosts = new BookmarkedPosts(postList[bookmarkedPost-1].content, date, postList[bookmarkedPost-1].username, postList[bookmarkedPost-1].userId, postList[bookmarkedPost-1].id)
                    newBookmark.bookmarked = true
                    var usersId = question("What is your user id? ")
                    trackingUsersBookmarks.push(usersId)
                    newBookmark.bookmarkedByWho = trackingUsersBookmarks
                    postsBookmarked.push(newBookmark)
                    console.log(postsBookmarked)
        }
           unbookmarkAPost(){
                     var unbookmarkedPost = parseInt(question("What is the id of the post you'd like to unbookmark? "))
                     var usersId = question("What is your user id? ")
                      for (let i=0; i<postsBookmarked.length; i++){
                        if(postsBookmarked[i].id === unbookmarkedPost){
                            for (let i=0; i<trackingUsersBookmarks.length; i++){
                                if (trackingUsersBookmarks[i] === usersId){
                                    trackingUsersBookmarks.splice(i,1)
                                if (trackingUsersBookmarks.length === 0){
                                    postsBookmarked.splice(i,1)
                                }
                                else{
                                    continue;
                                }
                            }
                        }
                    }
                }
            }
        
    
        likeAPost(){
                var likedPost = parseInt(question("What is the id of the post you'd like to like? "))
                let newLike: LikedPosts = new LikedPosts(postList[likedPost-1].content, date, postList[likedPost-1].username, postList[likedPost-1].userId, postList[likedPost-1].id)
                    newLike.liked = true
                    var usersId = question("What is your user id? ")
                    trackingUsersLikes.push(usersId)
                    newLike.likedByWho = trackingUsersLikes
                    postsLiked.push(newLike)
                    console.log(postsBookmarked)
            }

            unlikeAPost(){
                     var unliked = parseInt(question("What is the id of the post you'd like to unlike? "))
                     var usersId = question("What is your user id? ")
                     for (let i=0; i<postsLiked.length; i++){
                       if(postsLiked[i].id === unliked){
                           for (let i=0; i<trackingUsersLikes.length; i++){
                               if (trackingUsersLikes[i] === usersId){
                                   trackingUsersLikes.splice(i,1)
                               if (trackingUsersLikes.length === 0){
                                   postsLiked.splice(i,1)
                               }
                               else{
                                   continue;
                               }
                            }
                        }
                    }
                }
            }

        myBookmarkedPosts(){
            var userId = question("What is your username? ")
            for(let i =0; i < postsBookmarked.length;i++){
                for(let x = 0; x < trackingUsersBookmarks.length; x++){
                    if (trackingUsersBookmarks[i] === userId){
                        console.log(postsBookmarked[i])
                        break;
                    }
                }
            }
            mainScreen()
        }
myLikedPosts(){
    var userId = question("What is your username? ")
    for(let i =0; i < postsLiked.length;i++){
        for(let x = 0; x < trackingUsersLikes.length; x++){
            if (trackingUsersLikes[i] === userId){
                console.log(postsLiked[i])
                break;
            }
        }
    }
    mainScreen()
}
}


class BookmarkedPosts extends posts{
    //fields
    bookmarked:boolean;
    bookmarkedByWho:string[];

    constructor(content:string, dateCreated: Date, username:string, userId:number, id:number) {
        super(content, dateCreated, username, userId, id);
        this.bookmarked = true
        this.bookmarkedByWho = trackingUsersBookmarks
    }
    
}


class LikedPosts extends posts{
    //fields
    liked:boolean;
    likedByWho:string[];

    constructor(content:string, dateCreated: Date, username:string, userId:number, id:number) {
        super(content, dateCreated, username, userId, id);
        this.liked = true
        this.likedByWho = trackingUsersLikes
    }
    
}