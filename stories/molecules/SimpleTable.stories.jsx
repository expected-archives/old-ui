import React from 'react'
import { css } from '@emotion/core'
import { action } from '@storybook/addon-actions'
import SimpleTable from '~/components/molecules/SimpleTable'
import EmptyState from '~/components/molecules/EmptyState'

export default {
  title: 'Molecules/SimpleTable',
  component: SimpleTable,
}

const defaultConfig = [
  {
    renderHeader: () => 'Name',
    renderCell: (v) => v.name,
  },
  {
    renderHeader: () => 'Description',
    renderCell: (v) => v.description,
  },
]

const data = [
  {
    name: 'Hello world',
    description: 'My description',
  },
  {
    name: 'Lorem ipsum dolor',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dolore esse ipsa quod sint?',
  },
]

const noData = (
  <EmptyState
    title="No data!"
    description="This component is render when no data are provided."
  />
)


export const base = () => (
  <SimpleTable
    config={defaultConfig}
    dataSource={data}
    noData={noData}
    onRowClick={action('row clicked')}
  />
)

export const withoutData = () => (
  <SimpleTable
    config={defaultConfig}
    dataSource={undefined}
    noData={noData}
    onRowClick={action('row clicked')}
  />
)

export const customCss = () => (
  <SimpleTable
    config={[
      {
        renderHeader: () => 'Name',
        renderCell: (v) => v.name,
        css: css`background: red`,
      },
      ...defaultConfig.slice(1),
    ]}
    dataSource={data}
    noData={noData}
    onRowClick={action('row clicked')}
  />
)
