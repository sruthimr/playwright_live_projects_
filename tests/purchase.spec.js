import { test, expect } from "@playwright/test";
import loginpage from "../pages/login.js";
import purchasepage from "../pages/purchasepage.js";
import purchasepagelaptop from "../pages/laptoppurchase.js"
import purchasepagemonitor from "../pages/monitorpurchase.js"
import allproductpurchasepage from "../pages/allproductpurchase.js"
import credentials from "../utils/credentials.json";
import constant from "../constants/constant.js";
const checkoutdetails = {
  name: 'offer zone',
  country: 'India',
  city: 'Calicut',
  card: '1234567',
  month: 'September',
  year: '2026'
};
test.beforeEach(async ({ page }) => {
    
await page.goto (constant.BASE_URL);
  const Loginpage = new loginpage(page);
  await Loginpage.login(credentials.username, credentials.password);
  await expect(Loginpage.welcomeMessage).toHaveText('Welcome sruthimr');
});

test('test purchase multiple products', async ({ page }) => {
 const Loginpage = new loginpage(page);
   const Purchasepage= new purchasepage(page);

  //await page.goto('https://demoblaze.com/');
  //  await page.getByRole('link', { name: 'Log in' }).click();

 //const loginDialog = page.getByRole('dialog', { name: 'Log in' });
    
  // await loginDialog.locator("//input[@id='loginusername']").fill('sruthimr');
    //await loginDialog.locator("//input[@id='loginpassword']").fill('sruthi123');

  
    //const loginResponsePromise = page.waitForResponse('https://api.demoblaze.com/login');

    
    //await loginDialog.getByRole('button', { name: 'Log in', exact: true }).click();

    
   //await loginResponsePromise;

    
   // const welcomeMessage = page.locator('#nameofuser');
    //await expect(welcomeMessage).toHaveText('Welcome sruthimr');
   // await expect(Loginpage.welcomeMessage).toHaveText('Welcome sruthimr');
Purchasepage.setupProductDialogListener();
await Purchasepage.addproducttocart(Purchasepage.product_link1);
await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=1#");
 // await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
  //await page.waitForURL("https://demoblaze.com/prod.html?idp_=1");
//page.on('dialog', async (dialog) => {
       // expect(dialog.type()).toBe('alert');
        
        //expect(dialog.message()).toBe('Product added.');
        
        //await dialog.accept();

          //await page.getByRole('link',{name: 'Add to cart'}).click();
//});
await Purchasepage.navigatetohome();
await Purchasepage.addproducttocart(Purchasepage.product_link2);
await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=2#");
   
      //await page.getByRole('link',{name:'Home'}).click()
      //await page.getByRole('link',{name:'Nokia lumia 1520'}).click();
       //await page.waitForURL("https://demoblaze.com/prod.html?idp_=2");
//page.on('dialog', async (dialog) => {
        //expect(dialog.type()).toBe('alert');
        
        //expect(dialog.message()).toBe('Product added.');
        
       // await dialog.accept();
          //await page.getByRole('link',{name: 'Add to cart'}).click();

    //});  
    
    await Purchasepage.checkout(checkoutdetails); 
      // await page.getByRole('link',{name:'Cart'}).first().click();
       //await page.waitForURL("https://demoblaze.com/cart.html");
       //await page.getByRole('button',{name: 'Place Order'}).click();
       //await page.waitForTimeout(2000);
       //await page.locator('//input[@id="name"]').fill('offer zone');
       //await page.locator('//input[@id="country"]').fill('India');
       //await page.locator('//input[@id="city"]').fill('Calicut');
      //await page.locator('//input[@id="card"]').fill('1234567');
      //await page.locator('//input[@id="month"]').fill('September');
      //await page.locator('//input[@id="year"]').fill('2026');
      //await page.waitForTimeout(2000);
      //await page.getByRole('button',{name: 'Purchase'}).click();
      //await expect(Purchasepage.successMessage).toBeVisible();
      //await Purchasepage.okButton.click();
      await page.goto('https://demoblaze.com/index.html');


      //const successmessage = page.getByText('Thank you for your purchase!')

       // await page.getByRole('button',{name: 'OK'}).click();
      //await page.getByRole('link',{name: 'Log out'}).click();
      await Loginpage.logout();
      await expect(page).toHaveURL('https://demoblaze.com/index.html');


        //await page.waitForTimeout(2000);


});

test('test purchase multiple laptops', async ({ page }) => {
  const Loginpage = new loginpage(page);
  const Laptoppage = new purchasepagelaptop(page);
Laptoppage.setupProductDialogListener();
await Laptoppage.selectCategory('Laptops');

await Laptoppage.addproducttocart('Sony vaio i5');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=8#");

  // Navigate back home, go to Laptops and select MacBook Air
  await Laptoppage.navigatetohome();
  await Laptoppage.selectCategory('Laptops');
  await Laptoppage.addproducttocart('MacBook air');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=11#");

  //await page.getByRole('link',{name:'Laptops'}).click();
  //await page.waitForURL('https://demoblaze.com/index.html#');
  //await page.getByRole('link',{name: 'Sony vaio i5'}).click();
  //await page.waitForURL("https://demoblaze.com/prod.html?idp_=8");
  //page.on('dialog', async (dialog) => {
   //expect(dialog.type()).toBe('alert');
        
  //expect(dialog.message()).toBe('Product added.');
        
  //await dialog.accept();

  //await page.getByRole('link',{name: 'Add to cart'}).click();
//});
//await page.getByRole('link',{name:'Home'}).click()
//await page.getByRole('link',{name:'Laptops'}).click();
  //await page.waitForURL('https://demoblaze.com/index.html#');
//await page.getByRole('link',{name:'MacBook air'});
//await page.waitForURL("https://demoblaze.com/prod.html?idp_=11");
//page.on('dialog', async (dialog) => {
        //expect(dialog.type()).toBe('alert');
        
        //expect(dialog.message()).toBe('Product added.');
        
       // await dialog.accept();
       
//await page.getByRole('link',{name: 'Add to cart'}).click();

    //});  
    
 await page.getByRole('link',{name:'Cart'}).first().click();
       //await page.waitForURL("https://demoblaze.com/cart.html");
       //await page.getByRole('button',{name: 'Place Order'}).click();
       //await page.waitForTimeout(2000);
       //await page.locator('//input[@id="name"]').fill('offer zone');
       //await page.locator('//input[@id="country"]').fill('India');
       //await page.locator('//input[@id="city"]').fill('Calicut');
      //await page.locator('//input[@id="card"]').fill('1234567');
      //await page.locator('//input[@id="month"]').fill('September');
      //await page.locator('//input[@id="year"]').fill('2026');
      //await page.waitForTimeout(2000);
      //await page.getByRole('button',{name: 'Purchase'}).click();
     await Laptoppage.checkout(checkoutdetails);
      //await expect(Laptoppage.successMessage).toBeVisible();
      //await Laptoppage.okButton.click();
      await page.goto('https://demoblaze.com/index.html');
 //const successmessage = page.getByText('Thank you for your purchase!')

       // await page.getByRole('button',{name: 'OK'}).click();
      //await page.getByRole('link',{name: 'Log out'}).click();
      await Loginpage.logout();
      await expect(page).toHaveURL('https://demoblaze.com/index.html');


        //await page.waitForTimeout(2000);

});

test('test purchase multiple monitors', async ({ page }) => {
  const Loginpage = new loginpage(page);
  const Monitorpage = new purchasepagemonitor(page);
  Monitorpage.setupProductDialogListener();
await Monitorpage.selectCategory('Monitors');

await Monitorpage.addproducttocart('Apple monitor 24');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=10#");
  await Monitorpage.navigatetohome();
  await Monitorpage.selectCategory('Monitors');
  await Monitorpage.addproducttocart('ASUS Full HD');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=14#");
   await page.getByRole('link',{name:'Cart'}).first().click();

 await Monitorpage.checkout(checkoutdetails);
      
      await page.goto('https://demoblaze.com/index.html');
 await Loginpage.logout();
      await expect(page).toHaveURL('https://demoblaze.com/index.html');

});

test('test purchase all products', async ({ page }) => {
  const Loginpage = new loginpage(page);
  const Purchasepage= new purchasepage(page);
   const Laptoppage = new purchasepagelaptop(page);
  const Monitorpage = new purchasepagemonitor(page);
Purchasepage.setupProductDialogListener();
await Purchasepage.addproducttocart(Purchasepage.product_link1);
await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=1#");
await Purchasepage.navigatetohome();
 await Laptoppage.selectCategory('Laptops');
  await Laptoppage.addproducttocart('MacBook air');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=11#");
  await Laptoppage.navigatetohome();
await Monitorpage.selectCategory('Monitors');

await Monitorpage.addproducttocart('Apple monitor 24');
  await expect(page).toHaveURL("https://demoblaze.com/prod.html?idp_=10#");
  await page.getByRole('link',{name:'Cart'}).first().click();

 await Monitorpage.checkout(checkoutdetails);
      //await expect(Monitorpage.successMessage).toBeVisible();
      //await Monitorpage.okButton.click();
      await page.goto('https://demoblaze.com/index.html');
      await page.waitForTimeout(2000);
 await Loginpage.logout();
      await expect(page).toHaveURL('https://demoblaze.com/index.html');

});