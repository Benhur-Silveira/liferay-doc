import { defineConfig } from "vite";
import path from "path";
export default defineConfig({
  test: {
    globals: true,
    include: ["./__tests__/**/*.test.{js,ts,jsx,tsx}"],
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    alias: {
      "react-yo-shared-bundle": path.resolve(
        __dirname,
        "__mocks__/react-yo-shared-bundle",
      ),
    },
  },
});
