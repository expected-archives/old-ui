import React from "react"
import { addDecorator } from "@storybook/react"
import ThemeProvider from "../src/theme/themeProvider"

addDecorator(storyFn => (
  <ThemeProvider>
    {storyFn()}
  </ThemeProvider>
))

