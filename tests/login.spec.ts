import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import users from '../data/users.json';

test.describe('Login tests', () => {
  for (const user of users) {
    test(`Login attempt for ${user.username}`, async ({ page }) => {
      const loginPage = new LoginPage(page);
      await loginPage.goto();
      await loginPage.login(user.username, user.password);

      if (user.valid) {
        await expect(page).toHaveURL(/inventory/);
      } else {
        await expect(await loginPage.getError()).toBeVisible();
      }
    });
  }
});