module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    // Setting parserOptions.project in ESLint enables type- aware linting by reading the TypeScript configuration from tsconfig.json.This allows ESLint to catch issues related to await, such as:
    // @typescript - eslint / no - floating - promises: Detects unhandled promises(missing await or .then).
    // @typescript-eslint / require - await: Ensures await is used in async functions.
    // @typescript-eslint / no - misused - promises: Prevents incorrect usage of promises.
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'quotes': ['error', 'single'],
      },
    },
  ]
};
