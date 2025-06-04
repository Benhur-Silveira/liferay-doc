module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  moduleNameMapper: {
    "^react-cli-shared-bundle/utils$":
      "<rootDir>/__mocks__/react-cli-shared-bundle/utils.js",
  },
};
