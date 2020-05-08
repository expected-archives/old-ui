import React from "react"
import { boolean, select } from "@storybook/addon-knobs"
import Text from "./Text"

export default {
  title: "Typography/Text",
  component: Text,
}

const content = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
  ut aliquip ex ea commodo consequat.
`

const sizes = ["small", "medium", "large"]

export const base = () => (
  <Text
    size={select("Size", sizes, sizes[0])}
    bold={boolean("Bold", false)}
    italic={boolean("Italic", false)}
    strike={boolean("Strike", false)}
    underline={boolean("Underline", false)}
  >
    {content}
  </Text>
)

export const size = () =>
  sizes.map(size => (
    <Text key={size} size={size}>
      This is a {size} text. {content}
    </Text>
  ))

export const bold = () =>
  <Text bold>{content}</Text>

export const italic = () =>
  <Text italic>{content}</Text>

export const strike = () =>
  <Text strike>{content}</Text>

export const underline = () =>
  <Text underline>{content}</Text>
