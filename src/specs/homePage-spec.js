"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const homePage_1 = require("../pages/homePage");
describe('AngularJS Website Tests: ', () => {
    it('As a user i can navigate to way2automation', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
            yield console.log('User is navigated to AngularJS Website');
            yield homePage_1.homePage.getusername().isDisplayed;
            yield homePage_1.homePage.getusername().sendKeys("angular");
            yield homePage_1.homePage.getpassword().isDisplayed;
            yield homePage_1.homePage.getpassword().sendKeys("password");
        });
    });
    it('On click HomePage should be displayed', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield console.log('User is navigated to AngularJS Website');
            yield homePage_1.homePage.getusernamestar().sendKeys("angular");
            yield homePage_1.homePage.getloginbutton().click();
            protractor_1.browser.waitForAngular();
            expect(homePage_1.homePage.getlogout().isDisplayed()).toBeTrue;
        });
    });
});
