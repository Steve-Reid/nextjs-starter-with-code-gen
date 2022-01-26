# Next Opinionated Tailwind Styled Components Starter

An opinionated Nextjs starter project


## Tech Stack

- [NextJS v12](https://nextjs.org/) project - bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- React & React DOM v17
- Type Checker - TypeScript v4.5.2
- CSS Framework - TailwindCSS v3
- Component level Styling - Styled Components
- Component Level CSS Integration - [Twin.Macro](https://github.com/ben-rogerson/twin.examples/tree/master/next-styled-components)
- Component UI Development - Storybook v6.4.9
- Code Generator - [Plop](https://plopjs.com) v3.0.5
- Lint - ESlint v8, AirBnB & Eslint-config-next
- Format - Prettier
- Unit Testing - Jest + react-testing-library
- Mocking - Mock Service Worker
- E2E testing - Cypress
- Git hooks - Husky



## Usage

Inside the project directory run using `npm` or `yarn`:

- `dev` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- `build` - builds the app for production to the `build` folder.
- `start` - Runs the built app in production mode.
- `lint` - ESlint configured for Next. Use `.eslintrc.json` to setup & `.eslintignore` to ignore files.
- `clean-next` - delete `.next` folder.
- `check-types` - runs TypeScript's [`tsc` CLI command](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and pretty prints any warnings/errors.
- `check-format` - asks Prettier to check all of our files (excluding the ones in .prettierignore) for formatting issues.
- `format` - will format your code prettier using opinionated settings inside `.prettierrc` file. Use `.prettierignore` to ignore files.
- `storybook` - To run your Storybook. Open [http://localhost:6006/](http://localhost:6006/) to view it in the browser.
- `build-storybook` - build Storybook - create static Storybook project.
- `clean-storybook` - clean static Storybook folder.
- `test` - unit testing with Jest & react-testing-library.
- `test:watch` - watch our jest tests.
- `test:ci` - unit testing with Jest & react-testing-library using the ci flag.
- `cypress:open` - create a cypress E2E directory with some examples.
- `cypress:run` - run the E2E tests and record video.
- `cypress:clean` - delete `cypress` folder.
- `prepare` - Install husky.

### Run

```bash
yarn dev
# or
npm run dev
```

Entry point `pages/index.tsx`.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.tsx`.

The `pages/api` directory mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
## Code Generation

This starter has been configured to enable to generation of the code, files and directories that make up project pages and component from command line via the use of the awesome [Plop](https://plopjs.com) libary to scaffold out the required code.

Running the following command:

```bash
yarn run new
```
wil generate the following prompt:
```bash
rn run v1.22.17
$ plop
? [PLOP] Please choose a generator. (Use arrow keys)
❯ component - Generates new React component
  page - Generates new React page
```
Select an option and you will be then prompted for a name:
```bash
? [PLOP] Please choose a generator. component - Generates new React component
? What's the name of the Component? Nav
```
After which, the following files are created:
```bash
✔  ++ /src/components/Nav/Nav.tsx
✔  ++ /src/components/Nav/Nav.stories.tsx
✔  ++ /src/components/Nav/Nav.test.tsx
✔  ++ /src/components/Nav/index.ts
✔  ++ /src/components/index.ts
✔  _+ /src/components/index.ts
✔  _+ /src/components/index.ts
```
## Styling configurations

This starter has been configure to accommodate both Tailwind and Styled Components styles syntax, or even Styled Components containing Tailwind classes syntax.

You can refer to the [docs](https://github.com/ben-rogerson/twin.macro/tree/master/docs) in the twin.macro  repository for guidance.
## Eslint configurations

Lint set according to Airbnb and NextJS style guides.
## Format configurations

[Prettier](https://prettier.io/) is set using my opinionated [rules](https://prettier.io/docs/en/configuration.html) inside config file `.prettierrc`
