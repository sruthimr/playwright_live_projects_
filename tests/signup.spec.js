import {test,expect} from "@playwright/test";
import signuppage from "../pages/signup.js";

test('first signup test', async ({ page }) => {
const signup = new signuppage(page);// create an object of the signup class
 await signup.navigate();
   // await page.goto('https://demoblaze.com/');
   // await page.getByRole('link', { name: 'Sign up' }).click();
   // await page.locator("//input[@id='sign-username']").fill('Sruthi');
   // await page.locator("//input[@id='sign-password']").fill('sruthi123');
   page.on('dialog', async (dialog) => {
        expect(dialog.message()).toMatch(/Sign up successful\.|This user already exist\./);
        await dialog.accept();
   });
  //  await page.getByRole('button', { name: 'Sign up' }).click();

await signup.openSignUpModal();
await signup.usersignup('Sruthi', 'sruthi123');
});