import { expect } from "@playwright/test";
export default class allproductpurchasepage{
    constructor(page){
        this.page=page;
      this.home_link=page.getByRole('link',{name:'Home'});
      this.cart_link=page.getByRole('link',{name:'Cart'});
      this.addtocartbutton=page.getByRole('link',{name: 'Add to cart'});
   this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
   this.namefield= page.locator('//input[@id="name"]');
       this.countryfield= page.locator('//input[@id="country"]');
       this.cityfield= page.locator('//input[@id="city"]');
      this.credcardfield= page.locator('//input[@id="card"]');
      this.monthfield= page.locator('//input[@id="month"]');
      this.yearfield= page.locator('//input[@id="year"]');
    
      this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
    
    // Success Dialog Elements
    this.successMessage = page.getByText('Thank you for your purchase!');
    this.okButton = page.getByRole('button', { name: 'OK' });
  }
      async navigateToHome() {
    await this.homeLink.click();
    await expect(this.page).toHaveURL(/.*index.html/);
  }
      
      
      setupProductDialogListener() {
    this.page.once('dialog', async (dialog) => {
      expect(dialog.type()).toBe('alert');
      expect(dialog.message()).toBe('Product added.');
      await dialog.accept();
    });
  }
   
      async selectCategory(categoryName) {
    const categoryLocator = this.page.getByRole('link', { name: categoryName });
    await categoryLocator.waitFor({ state: 'visible' });
    await categoryLocator.click();
  }
     
      async addProductToCart(productName) {
   const productLink = this.page.getByRole('link', { name: productName });
    await productLink.waitFor({ state: 'visible' });
    await productLink.click();
     
await this.addToCartButton.waitFor({ state: 'visible' });
      this.setupProductDialogListener();
    await this.addToCartButton.click();
  }

      async checkout(details) {
    await this.cartLink.click();
    await this.placeOrderButton.waitFor({ state: 'visible' });
    await this.placeOrderButton.click();

    await this.nameField.fill(details.name);
    await this.countryField.fill(details.country);
    await this.cityField.fill(details.city);
    await this.cardField.fill(details.card);
    await this.monthField.fill(details.month);
    await this.yearField.fill(details.year);

    await this.purchaseButton.click();
    await expect(this.successMessage).toBeVisible();
        await this.okButton.click();
  }
}