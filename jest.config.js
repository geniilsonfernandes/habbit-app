module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  moduleNameMapper: {
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^shared/(.*)$': '<rootDir>/src/shared/$1',
  },
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: [
    '<rootDir>/src',
    '<rootDir>/src/shared/habit/helper',
    // ...
  ],
}
