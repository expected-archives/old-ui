import React from 'react'
import { boolean, select } from '@storybook/addon-knobs'
import Heading from '~/components/atoms/Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading,
}

const content = 'Lorem ipsum dolor sit amet'

const sizes = ['extraSmall', 'small', 'medium', 'large', 'extraLarge']
const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const base = () => (
  <Heading
    size={select('Size', sizes, sizes[0])}
    as={select('Element', elements, elements[0])}
    noMargin={boolean('No margin', false)}
    bold={boolean('Bold', false)}
  >
    {content}
  </Heading>
)

export const size = () => sizes.map((s) => (
  <Heading key={s} size={s}>
    {content}
  </Heading>
))

export const bold = () => (
  <Heading bold>
    {content}
  </Heading>
)
