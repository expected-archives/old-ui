import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledLabel = styled.div((props) => css`
  display: block;
  font-weight: ${props.theme.fontWeight.bold};
  margin-bottom: 8px;
  font-family: ${props.theme.fontFamily.default};
  font-size: ${props.theme.typography.text.small.fontSize};
  line-height: ${props.theme.typography.text.small.lineHeight};
`)

const StyledRequired = styled.span((props) => css`
  color: ${props.theme.color.red['300']};
  font-weight: ${props.theme.fontWeight.regular};
  margin-left: 4px;
`)

function Label({ required, children, ...props }) {
  return (
    <StyledLabel {...props}>
      {children}
      {required && <StyledRequired>*</StyledRequired>}
    </StyledLabel>
  )
}

Label.propTypes = {
  required: PropTypes.bool,
  htmlFor: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Label
