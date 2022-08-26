import { question } from "readline-sync";

import * as fs from 'fs';

let data = fs.readFileSync('./appsettings.json');
let fileData = data.toJSON();

let readableData = data.toString("utf8")
let finalData = JSON.parse(readableData)

console.log(finalData)


let createdMenu: menu;
class menu{
    HomeMenu: string[];

    constructor(HomeMenu){
        this.HomeMenu = HomeMenu
    }
}


//want to parse string array into example class


//fields on a class and keys need to be the same because that's how it maps together