import { expect } from "@playwright/test";
export default class signuppage{
    constructor(page){
        this.page=page;
        this.signup_link=page.getByRole('link', { name: 'Sign up' });
        this.signUpModal = page.getByRole('dialog', { name: 'Sign up' });
        this.usernamefield=page.locator("//input[@id='sign-username']");
        this.passwordfield=page.locator("//input[@id='sign-password']");
        this.signupbutton=page.getByRole('button', { name: 'Sign up' });
    
    }
    async navigate() {
        await this.page.goto('https://demoblaze.com/'); 
    }
    async openSignUpModal() {
        await this.signup_link.click();
        await this.signUpModal.waitFor({state:'visible'});
    }
    async usersignup(username, password) {
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
        await this.signupbutton.click();
}}
