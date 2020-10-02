import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledHeading = styled.h1((props) => {
  const typo = props.theme.typography.heading[props.size]

  return css`
    font-family: ${props.theme.fontFamily.default};
    font-size: ${typo.fontSize};
    line-height: ${typo.lineHeight};
    margin: ${props.noMargin ? '0' : '0 0 24px'};
    font-weight: ${props.bold ? props.theme.fontWeight.bold : props.theme.fontWeight.regular};
  `
})

function Heading({ children, ...props }) {
  return (
    <StyledHeading {...props}>
      {children}
    </StyledHeading>
  )
}

Heading.propTypes = {
  size: PropTypes.oneOf(['extraSmall', 'small', 'medium', 'large', 'extraLarge']),
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  noMargin: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  as: 'h1',
  size: 'medium',
}

export default Heading
