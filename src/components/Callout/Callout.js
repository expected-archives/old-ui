import PropTypes from "prop-types"
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import React from "react";
import Heading from "~/components/Heading/Heading";
import theme from "~/theme/theme";


const CalloutStyled = styled.div(props => {
  const color = props.theme.color[props.color]
  const hexOpacity20 = 33

  return css`
    position: relative;
    display: block;
    border-radius: 4px;
    padding: 10px 12px 9px;
    margin-bottom: 16px;
    color: ${props.theme.color.black};
    font-family: ${props.theme.fontFamily.default};
    font-size: ${props.theme.typography.text["medium"].fontSize};
    font-weight: ${props.theme.typography.text["medium"].fontWeight};
    background-color: ${color["100"] + hexOpacity20};
    ${!props.block && css`width: fit-content`}
  `
})

function Callout({title, children, ...props}) {
  const color = theme.color[props.color]

  const ColorizedHeading = styled(Heading)`
    color: ${color['500']};
    margin-bottom: 10px;
  `

  return <CalloutStyled {...props} >
    <ColorizedHeading as="h4" size="medium">{title}</ColorizedHeading>
    {children}
  </CalloutStyled>
}

Callout.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger", "warning", "blue", "green", "red", "orange"]).isRequired,
  block: PropTypes.bool,
}

Callout.defaultProps = {
  color: "primary",
}

export default Callout
