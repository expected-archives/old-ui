const colorRed = {
  100: "#FC8181",
  200: "#F56565",
  300: "#E53E3E",
  400: "#C53030",
  500: "#9B2C2C",
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

const colorOrange = {
  100: "#FBD38D",
  200: "#F6AD55",
  300: "#ED8936",
  400: "#DD6B20",
  500: "#C05621",
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
    warning: colorOrange,
    blue: colorBlue,
    green: colorGreen,
    red: colorRed,
    orange: colorOrange,
  },
}
