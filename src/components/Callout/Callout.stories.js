import React from "react";
import {select, text} from "@storybook/addon-knobs"
import Callout from "~/components/Callout/Callout";

export default {
  title: "Components/Callout",
  component: Callout
}

const colors = ["primary", "success", "danger", "warning"]

export const base = () => (
  <Callout title={text("Title", "Visually important content")} color={select("Color", colors, colors[3])}>
    {text("Body", "The component is a simple wrapper around the CSS API that provides props for modifiers and optional title element. " +
      "Any additional HTML props will be spread to the rendered element.")}
  </Callout>
)
