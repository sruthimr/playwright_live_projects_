import {test,expect} from "@playwright/test";
import signupandclose from "../pages/signupclos.js";

test('signup closetest', async ({ page }) => {
    //await page.goto('https://demoblaze.com/');
    //await page.getByRole('link', { name: 'Sign up' }).click();
    //await page.locator("//input[@id='sign-username']").fill('Sruthi');
    //await page.locator("//input[@id='sign-password']").fill('sruthi123');
//await page.getByRole('button', { name: 'Close' }).nth(4).click();

const signupClose = new signupandclose(page);
await signupClose.navigate();
await signupClose.openSignUpModal();
await signupClose.fillsignupform('Sruthi', 'sruthi123');
await signupClose.closeSignUpModal();
await expect(signupClose.signupDialog).toBeHidden();
});