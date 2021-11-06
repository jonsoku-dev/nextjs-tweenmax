## install

```bash
$ yarn create next-app --typescript
```

## Install and Configure eslint

```bash
$ yarn add --dev eslint@^7 @typescript-eslint/eslint-plugin
```

### .eslintrc.json

```json
{
  "plugins": ["@typescript-eslint"],
  "extends": ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
}
```

## Configure Prettier

```bash
$ yarn add --dev prettier eslint-config-prettier
$ touch .prettierrc.json .prettierignore
```

### .prettierrc.json

```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

### .prettierignore

```text
node_modules
.next
```

Change `.eslintrc.json`

```json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
```

## Husky: Checking for errors, linting and formatting on commit

```bash
$ yarn add --dev husky
$ yarn husky install
$ yarn husky add .husky/pre-commit "yarn tsc --noEmit && yarn eslint --fix . && yarn prettier --write ."
```

Run the `tsc` command to make sure there are no TypeScript errors Run the `eslint` command to make sure there are no
ESLint errors Format our code using prettier

## Lint staged: only check your code when necessary

```bash
$ yarn add --dev lint-staged
$ touch lint-staged.config.js
```

### lint-staged.config.js

```js
module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON
  '**/*.(md|json)': (filenames) =>
    `yarn prettier --write ${filenames.join(' ')}`,
}
```

## import sort lint

https://www.npmjs.com/package/eslint-plugin-simple-import-sort

```bash
$ yarn add --dev eslint-plugin-simple-import-sort
```

Add "simple-import-sort" to "plugins" in your .eslintrc:

### .eslint.json

```json
{
  "plugins": ["simple-import-sort"]
}
```

Then add the rules for sorting imports and exports:

```json
{
  "parserOptions": {
    "sourceType": "module"
  },
  "env": {
    "es6": true
  },
  "plugins": ["@typescript-eslint", "simple-import-sort", "import"],
  "rules": {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error"
  }
}
```

## remove console

```bash
$ yarn add --dev babel-plugin-transform-remove-console @babel/plugin-proposal-private-property-in-object
```

https://babeljs.io/docs/en/babel-plugin-transform-remove-console
https://babeljs.io/docs/en/babel-plugin-proposal-private-property-in-object

### .babelrc

```json
{
  "plugins": [
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
  ]
}
```
