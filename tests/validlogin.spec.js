
import { test, expect } from "@playwright/test";
import loginpage from "../pages/login.js";
import credentials from "../utils/credentials.json";

test('test valid login', async ({ page }) => {
  const Loginpage = new loginpage(page);
  await Loginpage.navigate();
  //await Loginpage.login('sruthimr', 'sruthi123');
  await Loginpage.login(credentials.username,credentials.password);
   

    //await page.goto('https://demoblaze.com/');
    //await page.getByRole('link', { name: 'Log in' }).click();

   // const loginDialog = page.getByRole('dialog', { name: 'Log in' });
    
  //  await loginDialog.locator("//input[@id='loginusername']").fill('sruthimr');
  //  await loginDialog.locator("//input[@id='loginpassword']").fill('sruthi123');

  
   // const loginResponsePromise = page.waitForResponse('https://api.demoblaze.com/login');

    
   // await loginDialog.getByRole('button', { name: 'Log in', exact: true }).click();

    
 //   await loginResponsePromise;

    
    //const welcomeMessage = page.locator('#nameofuser');
    //await expect(welcomeMessage).toHaveText('Welcome sruthimr');
    await expect(Loginpage.welcomeMessage).toHaveText('Welcome sruthimr');
    await Loginpage.logout();
      await expect(page).toHaveURL('https://demoblaze.com/index.html');



  });

