import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const StyledText = styled.p(props => {
  const typo = props.theme.typography.text[props.size]

  return css`
    font-size: ${typo.fontSize};
    line-height: ${typo.lineHeight};
    font-weight: ${props.bold ? props.theme.fontWeight.bold : props.theme.fontWeight.regular};
    ${props.italic && css`font-style: italic`}
    ${props.strike && css`text-decoration: line-through`}
    ${props.underline && css`text-decoration: underline`}
  `
})

function Text({ children, ...props }) {
  return (
    <StyledText {...props}>
      {children}
    </StyledText>
  )
}

Text.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  italic: PropTypes.bool,
  bold: PropTypes.bool,
  strike: PropTypes.bool,
  underline: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Text.defaultProps = {
  size: "medium",
}

export default Text
