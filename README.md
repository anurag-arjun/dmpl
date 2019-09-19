# MaticFrontend ![Logo](https://market.decentraland.org/static/media/logo.a2f3cefb.svg)

- Install the dependencies by doing `npm install.`
- enter this command in cmd to create these files.
- `touch .prettierrc .eslintrc .stylelintrc .editorconfig settings.yaml`

## _What to do when bug happens?_

- Copy the whole log by any means.
- sent it to the slack channel.
- Wait for someone to fix that error.

## Why that error happened? General fixes.

1.  Dependencies are messing up.
2.  Remove any dependency from global modules' folder that is already in your
    local modules folder.
3.  Delete your node_modules folder.
4.  Delete the files below from your parent directory if they exist.
5.  Create them again and put the same content inside them.
6.  Install the dependencies again.
7.  Run the server.
8.  If there is any error again and you are unable to solve it, then you are not
    good at using google.

## Prettier Config file

> .prettierrc

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

    "insertPragma": false,.editorconfig

    "proseWrap": "always"

    }

## EsLint config file, updated and fixed

> .eslintrc

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

> .stylelintrc

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

> .editorconfig

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
