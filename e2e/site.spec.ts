import { test, expect } from '@playwright/test'

// TC-NP-001: page loads and shows brand name
test('TC-NP-001: page title and header render', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Naatu Paakam/)
  await expect(page.getByRole('banner')).toContainText('Naatu Paakam')
})

// TC-NP-002: hero section renders with tagline and CTA
test('TC-NP-002: hero section renders', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Naatu Paakam' })).toBeVisible()
  await expect(page.getByText('Native Kitchen')).toBeVisible()
  await expect(page.getByRole('link', { name: 'Explore Products' })).toBeVisible()
})

// TC-NP-003: only live + beta cards on home page (incubating excluded)
test('TC-NP-003: live and beta project cards present on home page', async ({ page }) => {
  await page.goto('/')
  const shown = ['JsDayCare', 'Family Vibes', 'Pkeep', 'Keep Plants Live', 'AI Companion']
  for (const name of shown) {
    await expect(page.getByRole('heading', { name, exact: true })).toBeVisible()
  }
  // incubating projects must NOT appear on home page
  await expect(page.getByRole('heading', { name: 'The Pickle Pot', exact: true })).not.toBeVisible()
  await expect(page.getByRole('heading', { name: 'LaunchPad', exact: true })).not.toBeVisible()
})

// TC-NP-003b: incubation page shows both incubating projects
test('TC-NP-003b: incubation page shows incubating projects', async ({ page }) => {
  await page.goto('/incubation')
  await expect(page.getByRole('heading', { name: 'The Pickle Pot', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'LaunchPad', exact: true })).toBeVisible()
  await expect(page.getByText("What's Brewing")).toBeVisible()
})

// TC-NP-004: live projects have Open App links
test('TC-NP-004: live projects have functional Open App links', async ({ page }) => {
  await page.goto('/')
  const liveLinks = page.getByRole('link', { name: 'Open App' })
  const count = await liveLinks.count()
  expect(count).toBeGreaterThanOrEqual(3)
  // all open-app hrefs must be external https URLs
  for (let i = 0; i < count; i++) {
    const href = await liveLinks.nth(i).getAttribute('href')
    expect(href).toMatch(/^https:\/\//)
  }
})

// TC-NP-005: filter pills work
test('TC-NP-005: Live filter shows only live projects', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Live' }).click()
  // after filtering, "Coming Soon" buttons should not appear
  await expect(page.getByText('Coming Soon').first()).not.toBeVisible()
  // Open App buttons should still exist
  await expect(page.getByRole('link', { name: 'Open App' }).first()).toBeVisible()
})

// TC-NP-006: About section renders pipeline steps
test('TC-NP-006: about section pipeline steps render', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Ideate').first()).toBeVisible()
  await expect(page.getByText('Incubate').first()).toBeVisible()
  await expect(page.getByText('Graduate').first()).toBeVisible()
  await expect(page.getByText('Public Beta').first()).toBeVisible()
})

// TC-NP-007: footer renders with links
test('TC-NP-007: footer renders with nav links', async ({ page }) => {
  await page.goto('/')
  const footer = page.getByRole('contentinfo')
  await expect(footer).toContainText('Naatu Paakam')
  await expect(footer.getByRole('link', { name: 'GitHub' })).toBeVisible()
})

// TC-NP-009: nav links scroll to correct sections / pages
test('TC-NP-009: How We Build nav link scrolls to pipeline section', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'How We Build' }).click()
  await page.waitForTimeout(600)
  const section = page.locator('#about')
  const box = await section.boundingBox()
  const scrollY = await page.evaluate(() => window.scrollY)
  expect(scrollY).toBeGreaterThan(300)
  expect(box).not.toBeNull()
})

test('TC-NP-009b: Products nav link scrolls to products section', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('navigation').getByRole('link', { name: 'Products' }).click()
  await page.waitForTimeout(600)
  const scrollY = await page.evaluate(() => window.scrollY)
  expect(scrollY).toBeGreaterThan(600)
})

test('TC-NP-009c: InnoLabs nav link navigates to /incubation', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'InnoLabs' }).first().click()
  await expect(page).toHaveURL(/\/incubation/)
  await expect(page.getByText("What's Brewing")).toBeVisible()
})

test('TC-NP-009d: Back link on incubation page returns to home', async ({ page }) => {
  await page.goto('/incubation')
  await page.getByRole('link', { name: /Back to Naatu Paakam/ }).click()
  await expect(page).toHaveURL('http://localhost:5184/')
})

test('TC-NP-009e: logo in header links to home from incubation page', async ({ page }) => {
  await page.goto('/incubation')
  await page.locator('header img[alt="Naatu Paakam"]').click()
  await expect(page).toHaveURL('http://localhost:5184/')
})

// TC-NP-008: GitHub links target naatu-paakam org
test('TC-NP-008: Code links point to github.com', async ({ page }) => {
  await page.goto('/')
  const codeLinks = page.getByRole('link', { name: 'Code' })
  const count = await codeLinks.count()
  expect(count).toBeGreaterThanOrEqual(1)
  for (let i = 0; i < count; i++) {
    const href = await codeLinks.nth(i).getAttribute('href')
    expect(href).toMatch(/github\.com/)
  }
})
