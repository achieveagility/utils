# @aaos/eslint-config

```
pnpm add -D eslint @aaos/eslint-config
```

#### package.json

```json
"scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'"
}
```

#### eslint.config.js

```javascript
export { eslintConfig as default } from '@aaos/eslint-config';
```

```javascript
import { eslintConfig } from '@aaos/eslint-config';

export default [
  ...eslintConfig,
  // your modifications
  {
    rules: {
      ...
    },
  },
];
```
