import { question } from "readline-sync";
import { posts } from "./class-posts";
import { mainScreen } from "./program";
export let users: User[] = [];
//export let createdUser: User; 

export interface iUser{
    //properties
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    eyeColor:string;
    birthDay:string;
    createdAt:Date;
    profile_photo_id:number;
    background_photo_id:number;
    //postList: posts[];

    //function
    createBirthDate(birthDay:string): string;
    findEyeColor(eyeColor:string): string;

}

export class User implements iUser{
    //field
    id:number;
    firstName:string;
    lastName:string;
    username:string;
    eyeColor:string;
    birthDay:string;
    createdAt:Date;
    profile_photo_id:number;
    background_photo_id:number;
    //postList: posts[];

    //constructor
    constructor(id:number, firstName:string, lastName:string, username:string, eyeColor:string, birthDay:string, createdAt:Date, profile_photo_id:number, background_photo_id:number){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.eyeColor = this.findEyeColor(eyeColor);
        this.birthDay = this.createBirthDate(birthDay);
        this.createdAt = createdAt;
        this.profile_photo_id = profile_photo_id;
        this.background_photo_id = background_photo_id;

    }

    //functions
    createBirthDate(birthDay:string):string{
        let dateBirthCreate: Date = new Date(birthDay)
        let dateBirth = dateBirthCreate.getDate() +'/'+(dateBirthCreate.getMonth()+1) +'/'+ dateBirthCreate.getFullYear(); 
        return dateBirth
    }


    outputUser(){
        var userSearch:string = question ("What is the username of the user you would like to search for? ")
        //try and find index of user with given username
        //its full of the class users so usersearch cannot be searched as its a subset of the class that is actually being stored in the array
        //tuples??
        for (let i=0; i<users.length; i++){
            if(users[i].username === userSearch){
                console.log("User details -  ");
                console.log("Name: " + users[i].firstName + " " + users[i].lastName);
                console.log("Username: " + users[i].username);
                console.log("Birthday: " + users[i].birthDay);
                console.log("Eye Color: " + users[i].eyeColor);
            }
        var returnAnswer = question("Would you like to search for another user?" + (" y/n "))
            if (returnAnswer === 'y'){
                this.outputUser()
            }else if (returnAnswer === 'n'){
                mainScreen()
            }
    }
    }

    deleteUser(){
        let userDeleteIndex = 0;
        var userDelete:string = question ("What is the username of the user you would like to delete? ")
        for (let i=0; i<users.length; i++){
            while(users[i].username !== userDelete){
            userDeleteIndex++
        }
            users.splice(userDeleteIndex,1)
            console.log("User - " + userDelete + " has been deleted")
            //console.log(users[0])
            }
        var returnAnswer = question("Would you like to delete another user?" + (" y/n "))
            if (returnAnswer === 'y'){
                this.deleteUser()
            }else if (returnAnswer === 'n'){
                mainScreen()
            }
        }

        updateUser(){
            var userUpdate = question("What user would you like to update?");
            var updatedInfo = question("What information would you like to change?" + " 1 - First Name " + " 2 - Last Name " + " 3 - Username " + " 4 - Birthday ");
            if (updatedInfo === '1'){
                var firstNameUpdate = question("What is the new first name? ");
                for (let i=0; i<users.length; i++){
                    while(users[i].username == userUpdate){
                    users[i].firstName = firstNameUpdate;
                    console.log("User - " + userUpdate + " has been updated")
                    break;
                }
                var returnAnswer = question("Would you like to update another user?" + (" y/n "))
                if (returnAnswer === 'y'){
                    this.updateUser()
                }else if (returnAnswer === 'n'){
                    mainScreen()
                }
            }}else if(updatedInfo === '2'){
                var lastNameUpdate = question("What is the new last name? ");
                for (let i=0; i<users.length; i++){
                    while(users[i].username == userUpdate){
                        users[i].lastName = lastNameUpdate;
                        console.log("User - " + userUpdate + " has been updated")
                        break;
                }
                var returnAnswer = question("Would you like to update another user?" + (" y/n "))
                if (returnAnswer === 'y'){
                    this.updateUser()
                }else if (returnAnswer === 'n'){
                    mainScreen()
                }
            }}else if(updatedInfo === '3'){
                var usernameUpdate = question("What is the new username? ");
                for (let i=0; i<users.length; i++){
                    while(users[i].username == userUpdate){
                        users[i].username = usernameUpdate;
                        console.log("User - " + userUpdate + " has been updated");
                        break;
                }
                var returnAnswer = question("Would you like to update another user?" + (" y/n "))
                if (returnAnswer === 'y'){
                    this.updateUser()
                }else if (returnAnswer === 'n'){
                    mainScreen()
                }
            }}else if(updatedInfo === '4'){
                var birthDateUpdate = question("What is the new birthday? ");
                for (let i=0; i<users.length; i++){
                    while(users[i].username == userUpdate){
                        users[i].birthDay = this.createBirthDate(birthDateUpdate);
                        console.log("User - " + userUpdate + " has been updated")
                        break;
                }
                var returnAnswer = question("Would you like to update another user?" + (" y/n "))
                if (returnAnswer === 'y'){
                    this.updateUser()
                }else if (returnAnswer === 'n'){
                    mainScreen()
                }
            }}}

    findEyeColor(eyeColor:string):string{
        enum EyeColor{
            Hazel,
            Blue,
            Green,
            Amber,
            Grey,
            Brown
        }
    
        if(eyeColor === 'Hazel'){
            return EyeColor[0]
        }else if(eyeColor === 'Blue'){
            return EyeColor[1]
        }else if(eyeColor === ' Green'){
        return EyeColor[2]
        }else if(eyeColor === 'Amber'){
        return EyeColor[3]
    }else if(eyeColor === 'Grey'){
        return EyeColor[4]
    }else{
        return EyeColor[5]
    }

}
}


