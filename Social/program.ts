import { question } from "readline-sync";
import { finalData } from "./appsettingforAllMenu";
import { Chats } from "./class-chats";
import { posts, postList } from "./class-posts";
import { Replies } from "./class-replies";
import { User, users } from "./class-user";

import * as fs from 'fs';

let userData = fs.readFileSync('./user-storage.json');
let fileUser = userData.toJSON();

let readableUser = userData.toString("utf8")
export let finalUser = JSON.parse(readableUser)

let createdUser: User;
let createdPost: posts;
let newChat: Chats;
let chatList: Chats[] = [];
export let replyList: Replies[] = []
export let date: Date = new Date();

function initaliseUsers(){
    for(let i=0; i < finalUser.Users.length; i++){
        createdUser = new User(users.length + 1, finalUser.Users[i]['firstName'], finalUser.Users[i]['lastName'], finalUser.Users[i]['username'], finalUser.Users[i]['eyeColor'], finalUser.Users[i]['birthDay'], date, users.length + 1, users.length + 1);
        //createdUser = finalUser.Users[i]
        users.push(createdUser)
    }
}



function createUser() {
    var firstName = question("What is your first name? ");
    var lastName = question("What is your last name? ");
    var username = question("What is your username? ");
    var eyeColor = question("What is your eye color? ")
    var birthDay = question("What is your date of birth? Format - YYYY-MM-DD ");

    createdUser = new User(users.length + 1, firstName, lastName, username, eyeColor, birthDay, date, users.length + 1, users.length + 1);
    users.push(createdUser)
    mainScreen()
    //usersToJson(users)
}

 export function usersToJson(users: User[]){
    console.log(users)
    let fs: any = require('fs')
    let returnedUser = JSON.stringify(users, null, 2)
    //console.log(returnedUser)
    try{
    fs.writeFileSync('./user-storage.json', returnedUser);
    console.log('Successfully wrote file')
        mainScreen()
    } catch(error) {
        console.log('Error writing file')
        console.log('Please try again')
        createUser()
    }
    mainScreen()
 }
 


 //not getting to fs.writeFile, just kinda getting stuck before there/skipping straight over

function createPost(dateCreated: Date) {
    //how to get userid from username //do we actually want this in post? probably
    var userDetails = question("What username are you posting as? ")
    var userPostContent = question("What would you like to say? ")
    for (let i = 0; i < users.length; i++) {
        if (users[i].username === userDetails) {
            var userId = users[i].id
            createdPost = new posts(userPostContent, dateCreated, userDetails, userId, postList.length + 1);
            postList.push(createdPost)
            postScreen()
            //console.log(createdPost);
        }
    }
}

function createChat() {
    var chatMaker: string = question("What is your username? ")
    var chatPartner: string = question("What is the username of the person you'd like to chat with? ")
    let chatId = chatMaker + chatPartner
    newChat = new Chats(chatId, chatMaker)
    chatList.push(newChat)
    console.log(chatMaker + " and " + chatPartner + " are chatting ")
    continueChat(chatMaker, chatId)
}

function continueChat(chatMaker: string, chatId: string) {
    var message = question("Send a message! ")
    let newMessage = new Replies(replyList.length + 1, date, message, chatMaker, chatId)
    replyList.push(newMessage)
    var response = question("Would you like to send another message? y/n ")
    if (response === 'y') {
        continueChat(chatMaker, chatId)
    } else if (response === 'n') {
        mainScreen()
    }
}

export function mainScreen() {
    var response = question(console.log(finalData.HomeMenu));
     if (response === '1') {
        var response = question(console.log(finalData.UserMenu))
        if (response === '1'){
            createUser()
        }else if (response === '2'){
            createdUser.outputUser()
        }else if(response === '3'){
            createdUser.updateUser()
        }else if(response === '4'){
            createdUser.deleteUser()
        }
     }
    else if (response === '2') {
        postScreen()
    } else if (response === '3') {
        chatScreen()
    }else if (response === '4'){
        initaliseUsers()
    }
}

export function postScreen() {
    var response = question(console.log(finalData.PostsMenu))
    if (response === '1') {
        createPost(date)
    } else if (response === '2') {
        createdPost.outputMyPosts()
    } else if (response === '3') {
        createdPost.outputAllPosts()
    } else if (response === '4') {
        createdPost.myBookmarkedPosts()
    }
    else if (response === '5') {
        createdPost.myLikedPosts()
    } else if (response === '6') {
        mainScreen()
    }
}

export function chatScreen() {
    var response = question(console.log(finalData.ChatMenu));
    if (response === '1') {
        createChat()
    } else if (response === '2') {
        newChat.viewChat()
    } else if (response === '3') {
        mainScreen()
    }

}
initaliseUsers()
mainScreen()
//console.log(arrayUser)




