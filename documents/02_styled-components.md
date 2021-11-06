## Install

```bash
$ yarn add styled-components @types/styled-components
```

https://styled-components.com/docs/advanced#nextjs

### \_document.tsx

```typescript jsx
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
```

## built-in css support | Next.js

```bash
$ yarn add babel-plugin-styled-components
$ touch .babelrc
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
    ]
  ],
  "env": {
    "development": {
      "compact": false
    }
  }
}
```
