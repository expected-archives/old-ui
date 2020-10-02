import React from 'react'
import EmptyState from '~/components/molecules/EmptyState'

export default {
  title: 'Molecules/EmptyState',
  component: EmptyState,
}

const title = 'Lorem ipsum dolor'
const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?'

export const base = () => (
  <EmptyState
    title={title}
    description={description}
  />
)

export const withoutDescription = () => (
  <EmptyState
    title={title}
  />
)
