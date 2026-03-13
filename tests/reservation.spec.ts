import { test, expect } from '@playwright/test';

test.describe('Reservation Flow', () => {
    test.skip('Complete first-time reservation', async ({ page }) => {
        // Navigate to reservation page
        await page.goto('/reserve');

        // Step entry: Agree and start
        await page.click('text=同意して予約を始める');

        // Step type: First time
        await page.click('text=初めての方');

        // Step concern: Select shoulder pain
        await page.click('text=肩こり・首の痛み');

        // Step datetime: Select first available date
        const firstDate = page.locator('button.snap-start').first();
        await expect(firstDate).toBeVisible();
        await firstDate.click();

        // Step datetime: Select first available time (e.g. 09:00)
        await page.click('text=09:00');

        // Step info: Fill customer details
        await page.fill('input[type="text"]', 'テスト 太郎');
        await page.fill('input[type="tel"]', '090-1111-2222');
        await page.fill('input[type="email"]', 'test@example.com');

        // Proceed to confirmation
        await page.click('text=確認画面へ');

        // Step confirm: Assert details are correct
        await expect(page.locator('text=test@example.com').first()).toBeVisible();

        // Complete reservation
        await page.click('text=この内容で予約を確定する');

        // Step complete: Assert success message
        await expect(page.locator('text=ご予約を完了しました')).toBeVisible();
        await expect(page.locator('text=トップページへ戻る')).toBeVisible();
    });
});
