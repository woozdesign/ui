module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    // You can add your rules here
    "react/prop-types": "off", // Disable prop-types as we use TypeScript for type checking
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
