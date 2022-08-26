import { question } from "readline-sync";

import * as fs from 'fs';

let data = fs.readFileSync('./appsettings-JSON-for-later.json');
let fileData = data.toJSON();

let readableData = data.toString("utf8")
let finalData: menu = JSON.parse(readableData)

let allMenus: menu;
class menu{
    HomeMenu: string[] =[]
    UserMenu: string[] =[]
    PostsMenu: string[] =[]
    ChatMenu: string[] =[]
}

