## jest

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

## tsconfig

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "typeRoots": ["node_modules/@types", "src/types"],
    "paths": {
      "@/components/*": ["src/components/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/utils/*": ["src/utils/*"],
      "@/pages/*": ["src/pages/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

## storybook

```js
// main.js
const path = require('path')
console.log(
  path.resolve(__dirname, '../src/components'),
  "path.resolve(__dirname, '../src/components')"
)
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    'storybook-addon-styled-component-theme/dist/preset',
  ],
  // https://storybook.js.org/docs/react/configure/babel
  babel: async (options) => ({
    ...options,
    // any extra options you want to set
  }),
  // https://storybook.js.org/docs/react/configure/webpack#extending-storybooks-webpack-config
  webpackFinal: async (config) => {
    // alias: https://github.com/storybookjs/storybook/issues/11989#issuecomment-674833064
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@/components': path.resolve(__dirname, '../src/components'),
      '@/hooks': path.resolve(__dirname, '../src/hooks'),
      '@/utils': path.resolve(__dirname, '../src/utils'),
      '@/pages': path.resolve(__dirname, '../src/pages'),
    }
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
```
