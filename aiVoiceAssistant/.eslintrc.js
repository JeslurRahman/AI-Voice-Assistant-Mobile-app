module.exports = {
  root: true,
  extends: '@react-native',

  // Your other ESLint configurations
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2021, // or a higher version if needed
    sourceType: 'module', // or 'script' if needed
    ecmaFeatures: {
      js: true,
    },
  },

  'prettier/prettier': [
    'error',
    {
      endOfLine: 'auto',
    },
  ],
};
