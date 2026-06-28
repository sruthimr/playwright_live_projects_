import {test,expect} from "@playwright/test";
import loginpage from "../pages/login.js";
import parameterizedcredentials from "../utils/parameterizedcredentials.json";
for(const data of parameterizedcredentials){
    test(`invalid login with ${data.username} and ${data.password}`, async ({ page }) => { // dynamic title for each test case
  const Loginpage = new loginpage(page);
  await Loginpage.navigate();
  //await Loginpage.login('sruthimr', 'sruthi123');
  
    page.on('dialog', async dialog => {
      console.log(`[DIALOG CAPTURED]: ${dialog.message()}`);
            expect(dialog.message()).toMatch(/User does not exist|Wrong password/);
            await dialog.accept();
          });
            await Loginpage.login(data.username,data.password);
        });
  }
