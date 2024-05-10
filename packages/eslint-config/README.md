# @aaos/eslint-config

```
pnpm add -D eslint @aaos/eslint-config
```

#### package.json

```json
"scripts": {
    "lint": "eslint 'src/**/*.ts'"
}
```

#### .eslintrc.cjs

```javascript
module.exports = {
  extends: ["@aaos"],
};
```
