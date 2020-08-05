"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.homePage = void 0;
const protractor_1 = require("protractor");
class homePage {
    openBrowser(url) {
        protractor_1.browser.get(url);
    }
    static getusername() {
        return protractor_1.element(protractor_1.by.id("username"));
    }
    static getpassword() {
        return protractor_1.element(protractor_1.by.id("password"));
    }
    static getusernamestar() {
        return protractor_1.element(protractor_1.by.id("formly_1_input_username_0"));
    }
    static getloginbutton() {
        return protractor_1.element(protractor_1.by.tagName("button"));
    }
    static getlogout() {
        return protractor_1.element(protractor_1.by.linkText("Logout"));
    }
}
exports.homePage = homePage;
