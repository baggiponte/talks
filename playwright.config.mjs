import { defineConfig } from "@playwright/test";

const destination = process.env.TALKS_BASE_URL;
export default defineConfig({
  use: { baseURL: destination || "http://localhost:8790" },
  webServer: destination ? undefined : {
    command: "pnpm exec cf dev --port 8790",
    url: "http://localhost:8790",
    reuseExistingServer: !process.env.CI,
  },
});
