# MaticFrontend

## Prettier Config file

.prettierrc

      {

    "tabWidth": 2,

    "useTabs": false,

    "semi": true,

    "singleQuote": true,

    "trailingComma": "all",

    "bracketSpacing": true,

    "jsxBracketSameLine": true,

    "arrowParens": "always",

    "requirePragma": false,

    "insertPragma": false,

    "proseWrap": "always"

    }

## EsLint config file, updated and fixed

.eslintrc

        {

    "root": true,

    "extends": [

    "eslint:recommended",

    "plugin:import/errors",

    "plugin:import/warnings",

    "plugin:react/recommended"

    ],

    "plugins": ["react"],

    "parser": "babel-eslint",

    "parserOptions": {

    "ecmaVersion": 6,

    "sourceType": "module",

    "ecmaFeatures": {

    "jsx": true,

    "experimentalObjectRestSpread": true

    }

    },

    "env": {

    "es6": true,

    "browser": true,

    "node": true,

    "jquery": true,

    "jest": true

    },

    "globals": {}

    }

## Style Lint config file for prettier to use on css and other files

.stylelintrc

    {

    "rules": {

    "block-no-empty": null,

    "color-no-invalid-hex": true,

    "comment-empty-line-before": [ "always", {

    "ignore": ["stylelint-commands", "after-comment"]

    } ],

    "declaration-colon-space-after": "always",

    "indentation": ["tab", {

    "except": ["value"]

    }],

    "max-empty-lines": 2,

    "rule-empty-line-before": [ "always", {

    "except": ["first-nested"],

    "ignore": ["after-comment"]

    } ],

    "unit-whitelist": ["em", "rem", "%", "s"]

    }

    }

## Editor Config file

.editorconfig

    # EditorConfig is awesome: http://EditorConfig.org

    # top-most EditorConfig file

    root = true

    # Unix-style newlines with a newline ending every file

    [*]

    end_of_line = lf

    insert_final_newline = true

    # Matches multiple files with brace expansion notation

    # Set default charset

    [*.{js,py}]

    charset = utf-8

    # 4 space indentation

    [*.py]

    indent_style = space

    indent_size = 4

    # Tab indentation (no size specified)

    [Makefile]

    indent_style = tab

    # Indentation override for all JS under lib directory

    [lib/**.js]

    indent_style = space

    indent_size = 2

    # Matches the exact files either package.json or .travis.yml

    [{package.json,.travis.yml}]

    indent_style = space

    indent_size = 2
