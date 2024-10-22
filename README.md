# Shlink - JS coding standard

[![npm](https://img.shields.io/npm/v/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![npm downloads](https://img.shields.io/npm/dt/@shlinkio/eslint-config-js-coding-standard?style=flat-square)](https://www.npmjs.com/package/@shlinkio/eslint-config-js-coding-standard)
[![GitHub license](https://img.shields.io/github/license/shlinkio/js-coding-standard.svg?style=flat-square)](https://github.com/shlinkio/js-coding-standard/blob/master/LICENSE)
[![Paypal Donate](https://img.shields.io/badge/Donate-paypal-blue.svg?style=flat-square&logo=paypal&colorA=cccccc)](https://acel.me/donate)

Coding standard used by Shlink JavaScript projects.

This library includes two ESLint configurations, the base one (which includes eslint and typescript recommended rules), and the react-specific one (which includes JSX accessibility, react and react hooks recommended rules).

Default export includes both:

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
import { baseConfig } from '@shlinkio/eslint-config-js-coding-standard';

export default [
  ...baseConfig,
  {
    // Other rules...
  }
];
```
