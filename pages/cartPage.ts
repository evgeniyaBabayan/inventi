import { Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async assertFirstItem() {
    const item = this.page.locator('.cart_item');
    await expect(item).toHaveCount(1);
  }

  async checkout() {
    await this.page.locator('[data-test="checkout"]').click();
  }
}