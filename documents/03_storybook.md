## Install

```bash
$ npx sb init
```

## with storybook theme

https://storybook.js.org/addons/storybook-addon-styled-component-theme

```bash
$ yarn add --dev storybook-addon-styled-component-theme --dev
```

## Postcss

```bash
yarn add --dev @storybook/addon-postcss
```

## storybook proposal error

https://babeljs.io/docs/en/babel-plugin-proposal-private-methods
https://babeljs.io/docs/en/babel-plugin-proposal-private-property-in-object

```bash
$ yarn add --dev @babel/plugin-proposal-private-methods @babel/plugin-proposal-private-property-in-object @babel/plugin-proposal-class-properties
```

`.babelrc`

```json
{
  "presets": ["next/babel"],
  "plugins": [
    [
      "styled-components",
      {
        "ssr": true
      }
    ],
    [
      "transform-remove-console",
      {
        "exclude": ["error", "warn"]
      }
    ],
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-methods",
      {
        "loose": true
      }
    ],
    [
      "@babel/plugin-proposal-private-property-in-object",
      {
        "loose": true
      }
    ]
  ],
  "env": {
    "development": {
      "compact": false
    }
  }
}
```

## addons

### Accessibility

https://storybook.js.org/addons/@storybook/addon-a11y/

```bash
$ yarn add @storybook/addon-a11y --dev
```

### Storysource

https://storybook.js.org/addons/@storybook/addon-storysource/

```bash
$ yarn add --dev @storybook/addon-storysource
```

### Outline

https://storybook.js.org/addons/storybook-addon-outline/

```bash
$ yarn add --dev storybook-addon-outline
```
