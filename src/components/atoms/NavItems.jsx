import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledNavItems = styled.div((props) => css`
  display: flex;
  align-items: stretch;

  ${props.mlAuto && css`
    margin-left: auto;
  `}
  
  ${props.mrAuto && css`
    margin-right: auto;
  `}
`)

function NavItems({ children, ...props }) {
  return (
    <StyledNavItems {...props}>
      {children}
    </StyledNavItems>
  )
}

NavItems.propTypes = {
  mlAuto: PropTypes.bool,
  mrAuto: PropTypes.bool,
  children: PropTypes.node,
}

export default NavItems
