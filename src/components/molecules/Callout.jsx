import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Heading from '~/components/atoms/Heading'

const StyledCallout = styled.div((props) => css`
  position: relative;
  display: block;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;
  color: ${props.theme.color.black};
  font-family: ${props.theme.fontFamily.default};
  font-size: ${props.theme.typography.text.medium.fontSize};
  font-weight: ${props.theme.typography.text.medium.fontWeight};
  background: ${props.theme.color[props.color]['100'] + 33};
  color: ${props.theme.color[props.color]['500']};
  
  ${!props.block && css`
    width: fit-content;
  `}
`)

const StyledHeading = styled(Heading)`
  margin-bottom: 10px;
`

function Callout({ title, children, ...props }) {
  return (
    <StyledCallout {...props}>
      {title && (
        <StyledHeading as="h4" size="medium" color={props.color}>
          {title}
        </StyledHeading>
      )}
      {children}
    </StyledCallout>
  )
}

Callout.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'blue', 'green', 'red', 'orange']),
  block: PropTypes.bool,
  children: PropTypes.node,
}

Callout.defaultProps = {
  color: 'primary',
}

export default Callout
