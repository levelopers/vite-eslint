module.exports = {
  "**/*": "prettier --config .prettierrc.json --write --ignore-unknown",
  "*.{js,jsx,vue}": "lint",
};
