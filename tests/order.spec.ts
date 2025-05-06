import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productsPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { ConfirmationPage } from '../pages/confirmationPage';

test('Complete order from login to confirmation', async ({ page }) => {
  const login = new LoginPage(page);
  const products = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);
  const confirmation = new ConfirmationPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await products.sortHighToLow();
  await products.addFirstItemToCart();
  await products.goToCart();

  await cart.assertFirstItem();
  await cart.checkout();

  await checkout.fillDetails('Test', 'User', '12345');
  await checkout.finishOrder();

  await confirmation.assertConfirmation();
});