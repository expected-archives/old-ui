import React from 'react'
import { boolean, text } from '@storybook/addon-knobs'
import Header from '~/components/molecules/Header'

export default {
  title: 'Molecules/Header',
  component: Header,
}

export const base = () => (
  <Header
    preTitle={text('Pre title', 'My content')}
    title={text('Title', 'Visually important content')}
    center={boolean('Block', false)}
  />
)

export const title = () => (
  <Header
    title="Visually important content"
  />
)

export const center = () => (
  <Header
    title="Visually important content"
    center
  />
)

export const preTitle = () => (
  <Header
    preTitle="My content"
    title="Visually important content"
  />
)

export const sideContent = () => (
  <Header
    preTitle="My content"
    title="Visually important content"
  >
    My side content
  </Header>
)
