{
    "env": {
      "browser": true,
      "es6": true,
      "node": true,
      "jest/globals": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "defaultParams": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": ["react", "jest", "flowtype", "react-hooks"],
    "globals": {
      "google": true,
      "window": true,
      "before": true,
      "after": true,
      "beforeEach": true,
      "afterEach": true,
      "it": true,
      "describe": true,
      "$Shape": true,
      "$Values": true,
      "SyntheticInputEvent": true
    },
    "rules": {
      "no-const-assign": "warn",
      "no-this-before-super": "warn",
      "no-undef": "warn",
      "no-unreachable": "warn",
      "no-unused-vars": "warn",
      "constructor-super": "warn",
      "valid-typeof": "warn",
      "import/extensions": [0, "never", { "ts": "never" }],
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "flowtype/use-flow-type": 1
    },
    "settings": {
      "import/resolver": {
        "node": true,
        "eslint-import-resolver-typescript": true
      }
    }
  }
  