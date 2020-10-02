const { join } = require("path")

module.exports = {
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
    "@storybook/addon-actions/register",
  ],
  stories: [
    "../stories/**/*.stories.jsx",
  ],
  async webpackFinal(config) {
    config.resolve.alias["~"] = join(__dirname, "..", "src")
    return config
  },
}
