import React from "react"
import { boolean, select } from "@storybook/addon-knobs"
import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button,
}

const sizes = ["small", "medium", "large"]
const colors = ["primary", "success", "danger", "warning"]
const elements = ["button", "a"]

export const base = () => (
  <Button
    size={select("Size", sizes, sizes[1])}
    color={select("Color", colors, colors[0])}
    as={select("Element", elements, elements[0])}
    outline={boolean("Outline", false)}
    block={boolean("Block", false)}
    disabled={boolean("Disabled", false)}
    loading={boolean("Loading", false)}
  >
    Hello World
  </Button>
)

export const color = () =>
  colors.map(color => (
    <Button key={color} color={color}>
      {color} button
    </Button>
  ))

export const outline = () =>
  colors.map(color => (
    <Button key={color} color={color} outline>
      {color} button
    </Button>
  ))

export const block = () => (
  <Button block>
    Hello World
  </Button>
)

export const disabled = () => (
  <Button disabled>
    Hello World
  </Button>
)

export const loading = () => (
  <Button loading>
    Hello World
  </Button>
)
