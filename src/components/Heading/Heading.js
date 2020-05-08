import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

const StyledHeading = styled.h1(props => {
  const typo = props.theme.typography.heading[props.size]

  return css`
    font-size: ${typo.fontSize};
    line-height: ${typo.lineHeight};
    ${!props.noMargin && css`margin-bottom: 24px`}
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
  size: PropTypes.oneOf(["extraSmall", "small", "medium", "large", "extraLarge"]).isRequired,
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]).isRequired,
  noMargin: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

Heading.defaultProps = {
  as: "h1",
  size: "medium",
}

export default Heading
