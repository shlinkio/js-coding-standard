# Shlink - JS coding standard

[![npm](https://img.shields.io/npm/v/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![npm downloads](https://img.shields.io/npm/dt/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![GitHub license](https://img.shields.io/github/license/shlinkio/js-coding-standard.svg?style=flat-square)](https://github.com/shlinkio/js-coding-standard/blob/master/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://acel.me/donate)

Coding standard used by Shlink JavaScript projects.

This library includes two ESLint configurations on their own entry points:

* `/base`: includes recommended eslint, typescript and imports rules
* `/react` includes recommended JSX accessibility, react, react hooks and react compiler rules.

The default entry point includes both of them:

```js
// eslint.config.js
import shlink from '@shlinkio/eslint-config-js-coding-standard';

export default [
  ...shlink,
  {
    // Other rules...
  }
];
```

If the project does not use React, you can just use the base config:

```js
// eslint.config.js
import baseConfig from '@shlinkio/eslint-config-js-coding-standard/base';

export default [
  ...baseConfig,
  {
    // Other rules...
  }
];
```

If you need to access react rules independently, use the `/react` entry point:

```js
// eslint.config.js
import reactConfig from '@shlinkio/eslint-config-js-coding-standard/react';

export default [
  ...reactConfig,
  {
    // Other rules...
  }
];
```
