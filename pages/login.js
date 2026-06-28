import { expect } from "@playwright/test";
export default class loginpage{
    constructor(page){
        this.page=page;
        this.login_link=page.getByRole('link', { name: 'Log in' });
        this.loginDialog=page.getByRole('dialog', { name: 'Log in' });
        this.usernamefield = this.loginDialog.locator("//input[@id='loginusername']");
        this.passwordfield = this.loginDialog.locator("//input[@id='loginpassword']");
        this.loginbutton = this.loginDialog.getByRole('button', { name: 'Log in', exact: true });
        this.welcomeMessage = page.locator('#nameofuser');
    this.logout_link=page.getByRole('link',{name: 'Log out'});
    }

    async navigate() {
        await this.page.goto('https://demoblaze.com/'); 
    }
  async login(username, password) {
        await this.login_link.click();
        await this.usernamefield.waitFor({ state: 'visible' });
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        
        // Set up the API network listener before clicking the button
    
        await this.loginbutton.click();}
        async verifySuccessfulLogin(username){
    await this.logout_link.waitFor({ state: 'visible' });
    await expect(this.welcomeMessage).toContainText(`Welcome ${username}`);
    }
    async logout(){
        await this.logout_link.click();
    }
}