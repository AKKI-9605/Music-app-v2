const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const screenshotDir = path.join(process.cwd(), 'artifacts', 'screenshots');

test.beforeAll(() => {
  fs.mkdirSync(screenshotDir, { recursive: true });
});

test('desktop player loads with its main controls', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', error => pageErrors.push(error.message));

  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.locator('#app-container')).toBeVisible();
  await expect(page.locator('.brand')).toContainText('AKKI');
  await expect(page.locator('#main-title')).toHaveText('No Track Selected');
  await expect(page.locator('#playlist-container')).toContainText('Playlist is empty.');
  await expect(page.locator('#file-input')).toHaveAttribute('multiple', '');
  await expect(page.locator('#play-btn')).toBeVisible();
  await expect(page.locator('#next-btn')).toBeVisible();
  await expect(page.locator('#prev-btn')).toBeVisible();

  await page.screenshot({
    path: path.join(screenshotDir, 'player-desktop.png'),
    fullPage: true
  });

  expect(pageErrors).toEqual([]);
});

test('settings can be opened, changed, and closed', async ({ page }) => {
  await page.goto('/');
  await page.locator('#settings-toggle-btn').click();
  await expect(page.locator('#settings-modal')).toHaveClass(/open/);

  await page.locator('#theme-select').selectOption('amoled');
  await expect(page.locator('body')).toHaveClass(/amoled-mode/);

  await page.locator('#settings-close-btn').click();
  await expect(page.locator('#settings-modal')).not.toHaveClass(/open/);
});

test('slash keyboard shortcut focuses playlist search', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('/');
  await expect(page.locator('#search-input')).toBeFocused();
});

test('mobile layout remains visible and usable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');

  await expect(page.locator('#app-container')).toBeVisible();
  await expect(page.locator('#upload-zone')).toBeVisible();
  await expect(page.locator('#play-btn')).toBeVisible();

  await page.screenshot({
    path: path.join(screenshotDir, 'player-mobile.png'),
    fullPage: true
  });
});
