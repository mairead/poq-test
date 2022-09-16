const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@services(.*)$": "<rootDir>/services$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@types(.*)$": "<rootDir>/types$1",
    "^@context(.*)$": "<rootDir>/context$1",
    "^@actions(.*)$": "<rootDir>/actions$1",
  },
  testEnvironment: "jsdom",
};

module.exports = createJestConfig(customJestConfig);
