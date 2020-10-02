import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link as RouterLink } from 'react-router-dom'

function style(props) {
  const typo = props.theme.typography.text[props.size]

  return css`
    font-family: ${props.theme.fontFamily.default};
    font-size: ${typo.fontSize};
    line-height: ${typo.lineHeight};
    text-decoration: none;
    
    &, &:active, &:visited {
      color: ${props.theme.color.primary['300']}
    }
    
    :focus {
      outline: none;
    }
  `
}

const StyledRouterLink = styled(RouterLink)(style)

const StyledLink = styled.a(style)

function Link({ children, ...props }) {
  const Comp = props.to ? StyledRouterLink : StyledLink
  return (
    <Comp {...props}>
      {children}
    </Comp>
  )
}

Link.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  to: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Link.defaultProps = {
  size: 'medium',
}

export default Link
