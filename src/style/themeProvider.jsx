import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import theme from './theme'

function ThemeProvider({ children }) {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ThemeProvider
