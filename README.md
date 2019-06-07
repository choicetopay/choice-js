# JavaScript configs (for Choice)

- typescript
- eslint
- babel
- prettier

## typescript

`tsconfig.json`

```
{
  "extends": "choice-js/ts"
}
```

## eslint

`.eslintrc`

```
{
  "extends": [
    "node_modules/choice-js/eslint.js"
  ]
}
```

## babel

`babel.config.js`

```
module.exports = require('choice-js/babel')
```

## prettier

`.prettierrc.js`

```
module.exports = require('choice-js/prettier')
```
