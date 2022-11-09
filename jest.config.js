module.exports = {
  preset: 'jest-puppeteer',
  roots: ['<rootDir>'],
  moduleNameMapper: {
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  transformIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],
  testMatch: ['**/test/**/*.[jt]s?(x)?', '**/?(*.)+(e2e).[jt]s?(x)?'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    URL: 'http://localhost:3000',
    'ts-jest': {
      isolatedModules: true,
    },
  },
  testTimeout: 20000,
  verbose: true,
};
