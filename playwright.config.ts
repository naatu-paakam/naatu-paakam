import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  use: {
    baseURL: 'http://localhost:5184',
    headless: true,
    viewport: { width: 1280, height: 800 },
  },
  webServer: {
    command: 'npm run dev',
    port: 5184,
    reuseExistingServer: true,
    timeout: 30000,
  },
})
