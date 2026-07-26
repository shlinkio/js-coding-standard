# Shlink - JS coding standard

[![npm](https://img.shields.io/npm/v/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![npm downloads](https://img.shields.io/npm/dt/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![GitHub license](https://img.shields.io/github/license/shlinkio/js-coding-standard.svg?style=flat-square)](https://github.com/shlinkio/js-coding-standard/blob/master/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://acel.me/donate)

Coding standard used by Shlink JavaScript projects.

## Oxlint

This library includes two Oxlint configurations on their own entry points:

* `/base`: includes recommended eslint, typescript and imports rules.
* `/react` includes recommended JSX accessibility, react, react hooks and react compiler rules.
* `/oxlint` extends the above rules.

The default entry point includes both of them:

```js
// oxlint.config.ts
import { oxlint as shlink } from '@shlinkio/eslint-config-js-coding-standard';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [shlink],
  rules: {
    // Other rules...
  },
});
```

If the project does not use React, you can just use the base config:

```js
// oxlint.config.ts
import baseConfig from '@shlinkio/eslint-config-js-coding-standard/base';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [baseConfig],
  rules: {
    // Other rules...
  },
});
```

If you need to access react rules independently, use the `/oxc/react` entry point:

```js
// eslint.config.js
import reactConfig from '@shlinkio/eslint-config-js-coding-standard/react';
import { defineConfig } from 'oxlint';

export default defineConfig({
  extends: [reactConfig],
  rules: {
    // Other rules...
  },
});
```

## Oxfmt

This library exposes a base configuration for Oxfmt

```js
// oxfmt.config.ts
import { oxfmt as formatterConfig } from '@shlinkio/eslint-config-js-coding-standard';

export default formatterConfig;
```
