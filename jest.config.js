module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.jest.json',
    },
  },
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  moduleNameMapper: {
    '^@/components(.*)$': '<rootDir>/src/components/$1',
    '^@/hooks(.*)$': '<rootDir>/src/hooks/$1',
    '^@/utils(.*)$': '<rootDir>/src/utils/$1',
    '^@/pages(.*)$': '<rootDir>/src/pages/$1',
  },
}
