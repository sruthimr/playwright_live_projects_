export default class signupandclose{
    constructor(page){
        this.page=page;
        this.signup_link=page.getByRole('link', { name: 'Sign up' });
        this.signupDialog=page.getByRole('dialog',{name:'Sign up'});
this.closebutton = this.signupDialog.locator('.modal-footer').getByRole('button', { name: 'Close', exact: true });       
this.usernamefield= page.locator("//input[@id='sign-username']");
this.passwordfield=page.locator("//input[@id='sign-password']");
    }
    async navigate() {
        await this.page.goto('https://demoblaze.com/'); 
    }
    async openSignUpModal() {
        await this.signup_link.click();
        await this.signupDialog.waitFor({state:'visible'});
    }
    async fillsignupform(username, password) {
        

        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
    }
    async closeSignUpModal() {
        await this.closebutton.click();
    }
};
