# Purpose:

Exploring any awkwardness/difficulties associated with using ESM with Node.js (v17.0.1).

# Learnings

- Add `"type": "module"` field (in `package.json`) and things work as expected (we can use ESM `import`/`export` syntax, top-level await, strict mode by default, etc) within server-side code.
- Able to import both CommonJS and ESM packages via `import` syntax. For example:
  - Imported all of `express`, `supertest`, `cors`, `morgan`, `express-promise-router`, `pg`, -- some/most of which are distributed as CommonJS. All of them worked.
  - Imported `node-fetch v3` which is distributed as ESM-only. Also worked.
- Currently, Jest's support for ESM is limited but takes ~1 minute to configure ([details](https://jestjs.io/docs/ecmascript-modules)).
  - Was able to write and run tests using ESM.
- When using ESM via `.mjs` file extension, although we can use ESM features and code behaves correctly at runtime, during development VS Code didn't seem to provide intellisense. Might be related TS server not supporting `.mjs` or I may need to configure some setting in VS Code.
- Experienced errors when an import path didn't explicitly include file extension.
  - Automated this by enabling VS Code setting: `"javascript.preferences.importModuleSpecifierEnding": "js"`
  - Might also be possible by providing Node flag `--experimental-specifier-resolution=[mode]` (but couldn't get this to work).

# Summary

- Seems to require configuring two settings initially, but things work smoothly from there on out and we're able to use ESM with Node.js.

# Fallback

- An simple alternative to enable ESM for Node.js (without setting up a build process): [esm](https://www.npmjs.com/package/esm)
  - In theory, should no longer be needed (given Node's improved support for ESM), but might still be useful.
  - Haven't tried it personally, but seems highly rated and used -- but also hasn't been updated in ~2 years.
