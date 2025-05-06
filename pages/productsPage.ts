import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  async sortHighToLow() {
    await this.page.locator('[data-test="product_sort_container"]').selectOption('hilo');
  }

  async addFirstItemToCart() {
    const firstAddButton = this.page.locator('//button[contains(text(), "Add to cart")]').first();
    await firstAddButton.click();
  }

  async goToCart() {
    await this.page.locator('.shopping_cart_link').click();
  }
}