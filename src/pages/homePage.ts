import { browser, by, element } from "protractor";
export class homePage{

openBrowser(url:string){
    browser.get(url);

}

static getusername(){
    return element(by.id("username"));
}

static getpassword(){
    return element(by.id("password"));
}

static getusernamestar(){
    return element(by.id("formly_1_input_username_0"));
}

static getloginbutton(){
    return element(by.tagName("button"));
}

static getlogout(){
    return element(by.linkText("Logout"));
}
}
