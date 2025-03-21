import { test as baseTest } from "@playwright/test";
import SauceDemoApp from "../pages/SauceDemoApp";

type Pages = {
  sauceDemoApp: SauceDemoApp;
};

export const test = baseTest.extend<Pages>({
  sauceDemoApp: async ({ page }, use) => {
    await use(new SauceDemoApp(page));
  },
});

export { expect } from "@playwright/test";
