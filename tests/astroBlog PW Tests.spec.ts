import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://missildineblog.netlify.app/');
});

test.describe('New Greeting', () => {
  test('h3 should change with a button', async ({ page }) => {
    const oldGreeting = await page.textContent("h3");
    console.log("old greeting: " + oldGreeting);
    expect(oldGreeting).toBe('Hi! Thank you for visiting!');
  
    await page.getByRole('button', { name: 'New Greeting' }).click();
    console.log("clicked button now.");
      
    const newGreeting = await page.textContent("h3");
    console.log("new greeting: " + newGreeting);
    await page.waitForTimeout(300);
  
    expect(newGreeting).not.toBe(oldGreeting);
    console.log("---End of test---");
  });

});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home Page/);
});

async function findAndClickBurger(page) {
  const burger = page.locator('.hamburger');
  if(await burger.isVisible()){
    await burger.click();
  }  
}

test('about link takes me to about page',async ({page}) => {
  findAndClickBurger(page);  
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveTitle(/About Me/);
})

test('blog link takes me to blog page',async ({page}) => {
  findAndClickBurger(page);
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveTitle(/Blog/);
})

test('tags link takes me to tags page',async ({page}) => {
  findAndClickBurger(page);
  await page.getByRole('link', { name: 'tags' }).click();
  await expect(page).toHaveTitle(/Tags/);
})

