import { question } from "readline-sync";

import * as fs from 'fs';

let data = fs.readFileSync('./appsettings.json');
let fileData = data.toJSON();

let readableData = data.toString("utf8")
let finalData: menu = JSON.parse(readableData)

let createdMenu: mainMenu;
class mainMenu{
    questionOne:string;
    questionTwo:string;
    questionThree: string;

    constructor(questionOne:string, questionTwo:string, questionThree:string){
        this.questionOne = questionOne
        this.questionTwo = questionTwo
        this.questionThree = questionThree
    }
}

createdMenu = new mainMenu(finalData.HomeMenu[0], finalData.HomeMenu[1], finalData.HomeMenu[2])

class menu{
    HomeMenu: string[] = [];
}

console.log(finalData.HomeMenu)

// for (let i = 0; i < finalData.HomeMenu.length; i++){
//     console.log(finalData.HomeMenu[i]) 
// }

// console.log(createdMenu.questionOne)
// console.log(createdMenu.questionTwo)
// console.log(createdMenu.questionThree)
