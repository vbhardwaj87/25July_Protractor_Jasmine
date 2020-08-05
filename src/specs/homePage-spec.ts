import { browser, by, element } from "protractor";
import { homePage } from "../pages/homePage";


describe('AngularJS Website Tests: ', () => {
    

    it('As a user i can navigate to way2automation', async function () {
        await browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
        await console.log('User is navigated to AngularJS Website');
        await homePage.getusername().isDisplayed;
        await homePage.getusername().sendKeys("angular");
        await homePage.getpassword().isDisplayed;
        await homePage.getpassword().sendKeys("password");
    });

    it('On click HomePage should be displayed', async function () {
        await console.log('User is navigated to AngularJS Website');
        await homePage.getusernamestar().sendKeys("angular");
        await homePage.getloginbutton().click();
        browser.waitForAngular();
        expect(homePage.getlogout().isDisplayed()).toBeTrue;

    });


})