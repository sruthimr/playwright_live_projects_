import { expect } from "@playwright/test";
import { TIMEOUT } from "node:dns";
export default class purchasepage{
    constructor(page){
        this.page=page;
     this.product_link1=page.getByRole('link', { name: 'Samsung galaxy s6' });  
      this.addtocartbutton=page.getByRole('link',{name: 'Add to cart'});
      this.home_link=page.getByRole('link',{name:'Home'});
      this.product_link2= page.getByRole('link',{name:'Nokia lumia 1520'});
      this.cart_link=page.getByRole('link',{name:'Cart'});
      this.placeorderbutton=page.getByRole('button',{name: 'Place Order'});
      
      this.namefield= page.locator('//input[@id="name"]');
       this.countryfield= page.locator('//input[@id="country"]');
       this.cityfield= page.locator('//input[@id="city"]');
      this.credcardfield= page.locator('//input[@id="card"]');
      this.monthfield= page.locator('//input[@id="month"]');
      this.yearfield= page.locator('//input[@id="year"]');

       this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.successMessage = page.getByText('Thank you for your purchase!');
        this.okButton = page.getByRole('button', { name: 'OK' });
        this.logout_link=page.getByRole('link',{name: 'Log out'});
    }
   
    setupProductDialogListener() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Product added.');
            await dialog.accept();
        });}
        async addproducttocart(productLocator){
            await productLocator.click();
            await this.addtocartbutton.click();

        }
        async navigatetohome(){
            await this.home_link.click();
        }

async checkout(details){
    await this.cart_link.first().click();
    await this.placeorderbutton.click();
    await this.namefield.waitFor({state:'visible'});
    await this.namefield.fill(details.name);
    await this.countryfield.fill(details.country);
        await this.cityfield.fill(details.city);
        await this.credcardfield.fill(details.card);
        await this.monthfield.fill(details.month);
        await this.yearfield.fill(details.year);
        await this.purchaseButton.click();
        await expect(this.successMessage).toBeVisible({TIMEOUT:7000});
        await this.okButton.click();
    }
    async logout(){
        await  this.logout_link.click();
    }
}

    
