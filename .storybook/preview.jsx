import React from "react"
import { addDecorator } from "@storybook/react"
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import ThemeProvider from "~/style/themeProvider"

const history = createBrowserHistory()

addDecorator(storyFn => (
  <ThemeProvider>
    {storyFn()}
  </ThemeProvider>
))

addDecorator(storyFn => (
  <Router history={history}>
    {storyFn()}
  </Router>
))
