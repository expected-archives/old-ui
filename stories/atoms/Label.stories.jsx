import React from 'react'
import { boolean } from '@storybook/addon-knobs'
import Label from '~/components/atoms/Label'

export default {
  title: 'Atoms/Label',
  component: Label,
}

const content = 'Lorem ipsum dolor sit amet'

export const base = () => (
  <Label required={boolean('Required', false)}>
    {content}
  </Label>
)

export const required = () => (
  <Label required>
    {content}
  </Label>
)
