import React from "react";
import {boolean, select, text} from "@storybook/addon-knobs"
import Callout from "~/components/Callout/Callout";

export default {
  title: "Components/Callout",
  component: Callout
}

const colors = ["primary", "success", "danger", "warning"]

export const base = () => (
  <Callout
    title={text("Title", "Visually important content")}
    color={select("Color", colors, colors[0])}
    block={boolean("Block", false)}
  >
    {text("Body", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?")}
  </Callout>
)

export const color = () => (
  <>
    {colors.map((c, index) =>
      <Callout key={index} color={c} title="Visually important content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?
      </Callout>)
    }
  </>
)

export const block = () => (
  <Callout
    title="Visually important content"
    block
  >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?
  </Callout>
)
