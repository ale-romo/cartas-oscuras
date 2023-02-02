# Next.js with Tailwind CSS starter

This is a [Next.js] example that you can use with [`create-next-app`][create-next-app]. You'll get a next starter with:

- [Tailwind CSS]
  - With [Tailwind Forms], and [Inter] as the default font
- [TypeScript]
- [ESLint] and [Prettier]
- A couple of VS Code workspace defaults
  - Colored title bar
  - Format on save
  - [Prettier] as the default formatter

## Get Started

```bash
npx create-next-app your-app-name --example https://github.com/aedificatorum/next-starters/tree/main/tailwind
```

## What got added?

### Tailwind CSS

[Tailwind CSS] configured with [JIT mode].

The Tailwind stylesheet (`tailwind\tailwind.css`) is imported globally (in `_app.js`).

The Tailwind configuration has been extended to include [Tailwind Forms].

The default font has been changed to [Inter], and the font's stylesheet is added to the `<head>` in `_app.js`.

Finally, an example custom color has been added to the config, along with am example of it being used on the index page.

```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
    'palevioletred': '#DB7093'
    }
  },
},

// index.js
<h1 className="bg-palevioletred">...</h1>
```

### TypeScript

Including examples of both pages (e.g. `index.ts`) and an API route (e.g. `hello.ts`).

The project's `baseUrl` has also been set so you can use [absolute imports].

### ESLint and Prettier

ESLint is configured with Next's strict ruleset, as well as a Prettier integration (make sure you update your code style in `.prettierrc`).

Three new scripts have been added to `package.json` that run eslint/prettier.

```bash
yarn format # run prettier and apply rules
yarn lint # run eslint in report mode
yarn lint:fix # or run it in fix mode
```

### VS Code

The workspace has a few default settings (if you don't like them delete/change the `settings.json` file in the `.vscode` folder):

- Custom title bar color
- Default formatter set to the [Prettier extension][prettier vscode]
- Format on save

[next.js]: https://nextjs.org/
[create-next-app]: https://github.com/zeit/next.js/tree/canary/packages/create-next-app.
[tailwind css]: https://tailwindcss.com/
[jit mode]: https://tailwindcss.com/docs/just-in-time-mode
[absolute imports]: https://tjaddison.com/blog/2020/04/absolute-imports-with-react/
[tailwind forms]: https://tailwindcss-custom-forms.netlify.app/
[inter]: https://rsms.me/inter/
[prettier vscode]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[prettier]: https://prettier.io/
[eslint]: https://eslint.org/
[typescript]: https://www.typescriptlang.org/
