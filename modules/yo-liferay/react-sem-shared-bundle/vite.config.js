import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
    include: ["./__tests__/**/*.test.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
});
