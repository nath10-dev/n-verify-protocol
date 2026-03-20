# N-Verify Protocol - Config Files

## ESLint (.eslintrc.json)

```json
{
  "extends": ["next/core-web-vitals", "typescript-eslint"],
  "rules": {
    "no-console": "warn",
    "prefer-const": "error"
  }
}
```

## Prettier (.prettierrc)

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

## TypeScript (tsconfig.json)

```json
{
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  }
}
```
