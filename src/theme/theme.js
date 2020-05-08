const colorRed = {
  100: "#D4505B",
  200: "#C6283D",
  300: "#B8001E",
  400: "#A20018",
  500: "#8C0012",
}

const colorGreen = {
  100: "#39C978",
  200: "#22BB66",
  300: "#04AA51",
  400: "#038E41",
  500: "#027231",
}

const colorBlue = {
  100: "#4F8EDE",
  200: "#2E72D6",
  300: "#0052CC",
  400: "#0042B7",
  500: "#0035A6",
}

export default {
  typography: {
    heading: {
      extraSmall: {
        fontSize: "17px",
        lineHeight: "24px",
      },
      small: {
        fontSize: "19px",
        lineHeight: "24px",
      },
      medium: {
        fontSize: "22px",
        lineHeight: "24px",
      },
      large: {
        fontSize: "24px",
        lineHeight: "32px",
      },
      extraLarge: {
        fontSize: "28px",
        lineHeight: "32px",
      },
    },
    text: {
      small: {
        fontSize: "13px",
        lineHeight: "20px",
      },
      medium: {
        fontSize: "16px",
        lineHeight: "24px",
      },
      large: {
        fontSize: "18px",
        lineHeight: "28px",
      },
    },
  },
  breakpoints: {
    extraSmall: "0",
    small: "576px",
    medium: "768px",
    large: "992px",
    extraLarge: "1200px",
  },
  fontFamily: {
    default: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif",
    mono: "Consolas, monaco, monospace",
  },
  fontWeight: {
    regular: 400,
    semiBold: 600,
    bold: 700,
  },
  color: {
    white: "#FFF",

    primary: colorBlue,
    success: colorGreen,
    danger: colorRed,
    // warning
    blue: colorBlue,
    green: colorGreen,
    red: colorRed,
  },
}
