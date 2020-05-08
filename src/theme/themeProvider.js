import React from "react"
import {ThemeProvider as EmotionThemeProvider} from "emotion-theming"
import theme from "./theme"

function ThemeProvider({children}) {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  )
}

export default ThemeProvider
