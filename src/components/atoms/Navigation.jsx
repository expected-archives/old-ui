import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Container from '~/components/atoms/Container'

const StyledNavigation = styled.div((props) => css`
  background: ${props.theme.color[props.color][props.shade]};
  
  &,
  ${Container} {
    display: flex;
    flex-direction: row;
  }
`)

function Navigation({ children, ...props }) {
  return (
    <StyledNavigation {...props}>
      {children}
    </StyledNavigation>
  )
}

Navigation.propTypes = {
  color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'blue', 'green', 'red', 'orange']),
  shade: PropTypes.oneOf(['100', '200', '300', '400', '500']),
  children: PropTypes.node,
}

Navigation.defaultProps = {
  color: 'primary',
  shade: '300',
}

export default Navigation
