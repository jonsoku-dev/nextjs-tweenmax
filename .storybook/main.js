const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    'storybook-addon-outline',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
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
