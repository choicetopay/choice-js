# JavaScript toolchain configs (for Choice)

- typescript
- eslint
- babel
- prettier

## typescript

`tsconfig.json`

```
{
  "extends": "choice-js/tsconfig"
}
```

## eslint

`.eslintrc`

```
{
  "extends": [
    "choice-js/eslintrc"
  ]
}
```

## babel

`babel.config.js`

```
module.exports = require('choice-js/babel.config')
```

## prettier

`.prettierrc`

```
"choice-js/prettier"
```
