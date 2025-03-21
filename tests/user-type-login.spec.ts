import { test } from "../config/BaseFixture";

test(`Should be able to login`, async ({ sauceDemoApp }) => {
  await sauceDemoApp.loginPage.loadPage();
  await sauceDemoApp.loginPage.loginAsUser("standard_user", "secret_sauce");
});

test(`Should not be able to login with locked out user`, async ({
  sauceDemoApp,
}) => {
  await sauceDemoApp.loginPage.loadPage();
  await sauceDemoApp.loginPage.loginAsUser("locked_out_user", "secret_sauce");
});
