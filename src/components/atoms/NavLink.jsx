import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { useRouteMatch } from 'react-router'
import { css } from '@emotion/core'
import Link from './Link'

const StyledLink = styled(Link)((props) => css`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: ${props.theme.color.white} !important;
  text-decoration: none;
  padding: 0 16px;
  height: 100%;

  ${props.match && css`
    background: ${props.theme.color[props.color][props.shade]};
  `}
`)

function NavLink({ children, ...props }) {
  const match = useRouteMatch(props.to)

  return (
    <StyledLink {...props} match={match}>
      {children}
    </StyledLink>
  )
}

NavLink.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'blue', 'green', 'red', 'orange']),
  shade: PropTypes.oneOf(['100', '200', '300', '400', '500']),
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

NavLink.defaultProps = {
  color: 'primary',
  shade: '400',
}

export default NavLink
