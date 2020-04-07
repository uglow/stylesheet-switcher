module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['svelte3'],
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:node/recommended-module',
    //'plugin:prettier/recommended', // This can't be used with the svelte plugin, but can be used directly :(   See https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md
    'plugin:unicorn/recommended',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],

  rules: {
    'prettier/prettier': 'error',

    // Allow some flexibility here
    'unicorn/prevent-abbreviations': 'off',

    // Use camelCase for files (and directories - not enforced)
    'unicorn/filename-case': ['error', { case: 'camelCase' }],

    // Turn off explicit length checks
    'unicorn/explicit-length-check': 'off',

    // Turning off because it leads to many uses of the word 'error' in the same block, which is confusing
    // E.g.
    // } catch(error) {
    //   logger.error(error);
    //   return error(error);
    // }
    'unicorn/catch-error-name': 'off',

    // This rule is no good for test specs. Need to find a way to disable this for test specs
    'unicorn/consistent-function-scoping': 'off',
  },
};
