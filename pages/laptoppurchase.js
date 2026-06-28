import { expect } from "@playwright/test";
export default class purchasepagelaptop{
    constructor(page){
        this.page=page;
      this.home_link=page.getByRole('link',{name:'Home'});
      this.laptopsCategory= page.getByRole('link',{name: 'Laptops'});
      this.addToCartButton = page.getByRole('link',{name: 'Add to cart'});
      this.cart_link=page.getByRole('link',{name:'Cart'}).first();
      
      
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
    
    async navigateToHome() {
    await this.homeLink.click();
    await expect(this.page).toHaveURL(/.*index.html/);
  }
   
    setupProductDialogListener() {
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('alert');
            expect(dialog.message()).toBe('Product added.');
            await dialog.accept();
        });
    }
        async selectCategory(categoryName){
           await this.page.getByRole('link', { name: categoryName }).click();

await this.page.locator('#tbodyid').waitFor({ state: 'visible' });      } 
 async navigatetohome()
        {
            await this.home_link.click();
        }
        async addproducttocart(productName){
    // Dynamic text-based selector matching the string passed from the spec file
    await this.page.getByRole('link', { name: productName }).click();
    await this.addToCartButton.click();
}

async checkout(details){
    await this.cart_link.click();
    await this.placeorderbutton.click();
    await this.namefield.fill(details.name);
    await this.countryfield.fill(details.country);
        await this.cityfield.fill(details.city);
        await this.credcardfield.fill(details.card);
        await this.monthfield.fill(details.month);
        await this.yearfield.fill(details.year);
        await this.purchaseButton.click();
        await expect(this.successMessage).toBeVisible();
        await this.okButton.click();
    }
    async logout(){
        await  this.logout_link.click();
    }
}

    
