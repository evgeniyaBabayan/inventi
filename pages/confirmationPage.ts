import { Page, expect } from '@playwright/test';

export class ConfirmationPage {
  constructor(private page: Page) {}

  async assertConfirmation() {
    await expect(this.page.getByText('Thank you for your order!')).toBeVisible();
  }
}