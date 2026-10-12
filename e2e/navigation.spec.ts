import { test, expect } from '@playwright/test'

// ── Home nav scrolling ────────────────────────────────────────────────────────
test('NAV-001: How We Build scrolls pipeline section to top of viewport', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'How We Build' }).click()
  await page.waitForTimeout(500)
  const section = page.locator('#about')
  const box = await section.boundingBox()
  const scrollY = await page.evaluate(() => window.scrollY)
  // Section top should be at or very near the viewport top (allow for sticky header ~56px)
  expect(box).not.toBeNull()
  expect(Math.abs((box!.y + scrollY) - scrollY)).toBeLessThan(80)
})

test('NAV-002: Products scrolls products section to top of viewport', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click()
  await page.waitForTimeout(500)
  const section = page.locator('#products')
  const box = await section.boundingBox()
  expect(box).not.toBeNull()
  // After scroll, section heading should be visible near top
  await expect(page.getByRole('heading', { name: 'Our Products' })).toBeVisible()
})

test('NAV-003: InnoLabs nav link opens incubation page', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'InnoLabs' }).click()
  await expect(page).toHaveURL('/incubation')
  await expect(page.getByText("What's Brewing")).toBeVisible()
})

test('NAV-004: Logo always navigates home', async ({ page }) => {
  await page.goto('/incubation')
  await page.getByRole('link', { name: 'Naatu Paakam' }).first().click()
  await expect(page).toHaveURL('/')
  await expect(page.getByRole('heading', { name: 'Naatu Paakam' })).toBeVisible()
})

// ── Nav consistency from /incubation ─────────────────────────────────────────
test('NAV-005: All three nav links present on incubation page', async ({ page }) => {
  await page.goto('/incubation')
  const nav = page.getByRole('navigation')
  await expect(nav.getByRole('link', { name: 'How We Build' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'Products' })).toBeVisible()
  await expect(nav.getByRole('link', { name: 'InnoLabs' })).toBeVisible()
})

test('NAV-006: How We Build from incubation goes to /#about', async ({ page }) => {
  await page.goto('/incubation')
  await page.getByRole('navigation').getByRole('link', { name: 'How We Build' }).click()
  await expect(page).toHaveURL('/#about')
  await expect(page.getByRole('heading', { name: 'From Idea to Product' })).toBeVisible()
})

test('NAV-007: Products from incubation goes to /#products', async ({ page }) => {
  await page.goto('/incubation')
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click()
  await expect(page).toHaveURL('/#products')
  await expect(page.getByRole('heading', { name: 'Our Products' })).toBeVisible()
})

test('NAV-008: No redundant Back link on incubation page (nav is sufficient)', async ({ page }) => {
  await page.goto('/incubation')
  await expect(page.getByRole('link', { name: /Back to Naatu Paakam/i })).not.toBeVisible()
  // Logo still goes home
  await page.getByRole('link', { name: 'Naatu Paakam' }).first().click()
  await expect(page).toHaveURL('/')
})

// ── Footer links ─────────────────────────────────────────────────────────────
test('NAV-009: Footer Website link is external and present', async ({ page }) => {
  await page.goto('/')
  const footer = page.getByRole('contentinfo')
  const website = footer.getByRole('link', { name: 'Website' })
  await expect(website).toBeVisible()
  expect(await website.getAttribute('href')).toContain('naatupaakam.com')
})

test('NAV-010: Footer InnoLabs link navigates to /incubation', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('contentinfo').getByRole('link', { name: 'InnoLabs' }).click()
  await expect(page).toHaveURL('/incubation')
})

test('NAV-011: Footer Ideas link is external', async ({ page }) => {
  await page.goto('/')
  const ideas = page.getByRole('contentinfo').getByRole('link', { name: 'Ideas' })
  await expect(ideas).toBeVisible()
  expect(await ideas.getAttribute('href')).toContain('pavan-ideas')
})

// ── Product cards ─────────────────────────────────────────────────────────────
test('NAV-012: Live product Open App buttons have valid https URLs', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Explore Products' }).click()
  await page.waitForTimeout(400)
  const openButtons = page.getByRole('link', { name: 'Open App' })
  const count = await openButtons.count()
  expect(count).toBeGreaterThanOrEqual(4) // 4 live products
  for (let i = 0; i < count; i++) {
    const href = await openButtons.nth(i).getAttribute('href')
    expect(href).toMatch(/^https:\/\//)
  }
})

test('NAV-013: Code links on product cards point to github.com', async ({ page }) => {
  await page.goto('/')
  const codeLinks = page.getByRole('link', { name: 'Code' })
  const count = await codeLinks.count()
  expect(count).toBeGreaterThanOrEqual(5)
  for (let i = 0; i < count; i++) {
    expect(await codeLinks.nth(i).getAttribute('href')).toMatch(/github\.com/)
  }
})

// ── Filter pills ──────────────────────────────────────────────────────────────
test('NAV-014: Live filter shows only Live cards', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Live', exact: true }).click()
  const cards = page.locator('article')
  const count = await cards.count()
  expect(count).toBe(4) // 4 live products
  // No "Coming Soon" buttons should appear
  await expect(page.getByText('Coming Soon').first()).not.toBeVisible()
})

test('NAV-015: Beta filter shows only Beta cards', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Beta', exact: true }).click()
  const cards = page.locator('article')
  const count = await cards.count()
  expect(count).toBe(2) // 2 beta products
})

test('NAV-016: All filter restores full list', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Live', exact: true }).click()
  await page.getByRole('button', { name: 'All', exact: true }).click()
  const cards = page.locator('article')
  const count = await cards.count()
  expect(count).toBe(6) // 5 live+beta (incubating excluded from main page)
})

// ── InnoLabs CTA ─────────────────────────────────────────────────────────────
test('NAV-017: See what is brewing in InnoLabs CTA navigates to /incubation', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: /brewing in InnoLabs/i }).click()
  await expect(page).toHaveURL('/incubation')
  await expect(page.getByText("What's Brewing")).toBeVisible()
})

test('NAV-018: InnoLabs page CTA returns to products section', async ({ page }) => {
  await page.goto('/incubation')
  await page.getByRole('link', { name: /Naatu Paakam Products/i }).click()
  await expect(page).toHaveURL(/\/#products/)
  await expect(page.getByRole('heading', { name: 'Our Products' })).toBeVisible()
})

test('NAV-019: Logo scrolls to top when clicked from Products section', async ({ page }) => {
  await page.goto('/')
  // Scroll down to products section
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click()
  await page.waitForTimeout(600)
  const scrollAtProducts = await page.evaluate(() => window.scrollY)
  expect(scrollAtProducts).toBeGreaterThan(300)
  // Click logo — should scroll back to top
  await page.getByRole('link', { name: 'Naatu Paakam' }).first().click()
  await page.waitForTimeout(800)
  const scrollAfterLogo = await page.evaluate(() => window.scrollY)
  expect(scrollAfterLogo).toBeLessThan(50)
})
