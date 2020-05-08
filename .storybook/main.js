const { join } = require("path")

module.exports = {
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-docs",
  ],
  stories: [
    "../src/**/*.stories.js",
  ],
  async webpackFinal(config) {
    config.resolve.alias["~"] = join(__dirname, "..", "src")
    return config
  },
}
