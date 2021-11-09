## Install

```bash
$ yarn add --dev jest @testing-library/react @types/jest babel-jest @testing-library/jest-dom @testing-library/user-event @testing-library/dom jest-styled-components
```

## alias

https://blog.kieranroberts.dev/how-to-setup-path-aliases-for-development-with-nextjs-and-jest

```js
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
```

## styled-components theme provider

```tsx
import 'jest-styled-components'

import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import Index from '@/components/atoms/Index'
import { theme } from '@/utils/theme'

it('renders "Index"', () => {
  render(
    <ThemeProvider theme={theme}>
      <Index href={'https://naver.com'} text={'naver'} />
    </ThemeProvider>
  )
  const element = screen.getByText(/naver/)
  expect(element).toBeInTheDocument()
})
```
