# Meta Blocks JS Monorepo

## To install @kyraa/metablocks, you can

```bash
yarn add ../kyra/packages/anchor # anchor is peer dep
yarn add ../kyraa/packages/metablocks
```

And then use Meta Blocks in your app like:

```javascript
import { api } from "@kyraa/metablocks";
```

## Live reloads

Might not work with `yarn add`

In local workflow, currently symlinking kyraa/packages to @kyraa in the project root, and then importing it as normal js code.

## Another option for live reloads

```bash
yarn link
```
