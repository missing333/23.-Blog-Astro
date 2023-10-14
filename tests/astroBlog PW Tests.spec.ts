import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4321/');
});

test.describe('New Greeting', () => {
  test('h3 should change with a button', async ({ page }) => {
    await page.goto('http://localhost:4321/');
    const oldGreeting = await page.textContent("h3");
    console.log("old: " + oldGreeting);
  
    await page.getByRole('button', { name: 'New Greeting' }).click();
  
    const newGreeting = await page.textContent("h3");
    console.log("new: " + newGreeting);
  
    expect(newGreeting).not.toBe(oldGreeting);
  });

});

test('has title', async ({ page }) => {

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home Page/);
});

test('about link takes me to about page',async ({page}) => {
  await page.getByRole('link', { name: 'About' }).click();
  await expect(page).toHaveTitle(/About Me/);
})

test('blog link takes me to blog page',async ({page}) => {
  await page.getByRole('link', { name: 'Blog' }).click();
  await expect(page).toHaveTitle(/Blog/);
})

test('tags link takes me to tags page',async ({page}) => {
  await page.getByRole('link', { name: 'tags' }).click();
  await expect(page).toHaveTitle(/Tags/);
})
