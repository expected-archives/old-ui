import React from 'react'
import { boolean, select, text } from '@storybook/addon-knobs'
import Callout from '~/components/molecules/Callout'

export default {
  title: 'Molecules/Callout',
  component: Callout,
}

const content = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?'
const colors = ['primary', 'success', 'danger', 'warning']

export const base = () => (
  <Callout
    title={text('Title', 'Visually important content')}
    color={select('Color', colors, colors[0])}
    block={boolean('Block', false)}
  >
    {content}
  </Callout>
)

export const color = () => (
  <>
    {colors.map((c) => (
      <Callout key={c} color={c} title="Visually important content">
        {content}
      </Callout>
    ))}
  </>
)

export const block = () => (
  <Callout title="Visually important content" block>
    {content}
  </Callout>
)
