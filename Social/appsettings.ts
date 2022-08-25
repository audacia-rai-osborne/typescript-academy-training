import { question } from "readline-sync";

import * as fs from 'fs';

let data = fs.readFileSync('./appsettings.json');
let fileData = data.toJSON();

let readableData = data.toString("utf8")
let finalData = JSON.parse(readableData)

//console.log(finalData.HomeMenu)

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

console.log(createdMenu.questionOne)
console.log(createdMenu.questionTwo)
console.log(createdMenu.questionTwo)

// iterate through finalData.HomeMenu to fill createdMenu
// iterate through createdMenu to console.log questions
