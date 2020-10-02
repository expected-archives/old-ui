import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import Input from '~/components/molecules/Input'

export default {
  title: 'Molecules/Input',
  component: Input,
}

export const base = () => (
  <Input
    label={text('Label', 'The label')}
    placeholder={text('Placeholder', 'John doe')}
    large={boolean('Large', false)}
    required={boolean('Required', false)}
  />
)

export const label = () => (
  <Input label="The label" />
)

export const labelWithRequired = () => (
  <Input label="The label" required />
)

export const error = () => (
  <Input meta={{ touched: true, error: 'This is an error.' }} />
)

export const large = () => (
  <Input large />
)

export const largeWithLabel = () => (
  <Input large label="The label" />
)

export const largeWithError = () => (
  <Input large meta={{ touched: true, error: 'This is an error.' }} />
)
