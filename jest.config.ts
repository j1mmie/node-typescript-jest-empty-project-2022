import type { Config } from '@jest/types'

const config:Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '@tests/(.*)': '<rootDir>/tests/$1',
  },
  testPathIgnorePatterns: [
    'dist'
  ],
  fakeTimers: {
    enableGlobally: true
  }
}

export default config
