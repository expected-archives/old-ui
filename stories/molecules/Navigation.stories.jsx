import React from 'react'
import { select } from '@storybook/addon-knobs'
import Navigation from '~/components/atoms/Navigation'
import NavItems from '~/components/atoms/NavItems'
import NavLink from '~/components/atoms/NavLink'

export default {
  title: 'Molecules/Navigation',
}

const navigationColors = ['primary', 'success', 'danger', 'warning', 'blue', 'green', 'red', 'orange']
const navigationShades = ['100', '200', '300', '400', '500']

export const base = () => (
  <Navigation
    color={select('Navigation color', navigationColors, 'primary')}
    shade={select('Navigation color shade', navigationShades, '300')}
  >
    <NavItems>
      <NavLink
        to="/"
        color={select('Active color', navigationColors, 'primary')}
        shade={select('Active color shade', navigationShades, '300')}
      >
        Link 1
      </NavLink>
      <NavLink to="/test">Link 2</NavLink>
    </NavItems>
    <NavItems mlAuto>
      <NavLink to="/test">Link 1</NavLink>
      <NavLink to="/test">Link 2</NavLink>
    </NavItems>
  </Navigation>
)
