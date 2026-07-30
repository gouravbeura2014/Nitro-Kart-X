import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

    {
        files: ["**/*.ts"],

        languageOptions: {
            globals: globals.browser,
            ecmaVersion: "latest",
            sourceType: "module"
        },

        rules: {
            "no-console": "off",

            "no-debugger": "warn",

            "@typescript-eslint/no-unused-vars": [
                "warn",
                {
                    argsIgnorePattern: "^_",
                    varsIgnorePattern: "^_"
                }
            ],

            "@typescript-eslint/no-explicit-any": "warn"
        }
    }
];
