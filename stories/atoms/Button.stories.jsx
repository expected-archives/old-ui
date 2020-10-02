import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import Button from '~/components/atoms/Button'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const sizes = ['small', 'medium', 'large']
const colors = ['primary', 'success', 'danger', 'warning']
const elements = ['button', 'link']

export const base = () => (
  <Button
    size={select('Size', sizes, sizes[1])}
    color={select('Color', colors, colors[0])}
    as={select('Element', elements, elements[0])}
    outline={boolean('Outline', false)}
    block={boolean('Block', false)}
    disabled={boolean('Disabled', false)}
    loading={boolean('Loading', false)}
  >
    Hello world
  </Button>
)

export const color = () => colors.map((c) => (
  <Button key={c} color={c}>
    {c} button
  </Button>
))

export const outline = () => colors.map((c) => (
  <Button key={c} color={c} outline>
    {c} button
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
