import PropTypes from "prop-types"
import styled from "@emotion/styled";
import {css} from "@emotion/core"
import React from "react";
import Heading from "~/components/Heading/Heading";
import theme from "~/theme/theme";


const CalloutStyled = styled.div(props => {
  const color = props.theme.color[props.color]

  console.log(props.theme.color.white)

  return css`
    position: relative;
    display: block;
    border-radius: 2px;
    padding: 10px 12px 9px;
    color: ${props.theme.color.black};
    font-family: ${props.theme.fontFamily.default};
    font-size: ${props.theme.typography.text["medium"].fontSize};
    font-weight: ${props.theme.typography.text["medium"].fontWeight};
    width: ${props.block ? "100%" : "fit-content"};
    background-color: ${color["100"]};
  `
})

function Callout({title, children, ...props}) {
  const color = theme.color[props.color]

  const ColorizedHeading = styled(Heading)`
    color: ${color['500']};
  `

  return <CalloutStyled {...props} >
    <ColorizedHeading as="h3" size="large">{title}</ColorizedHeading>
    {children}
  </CalloutStyled>
}

Callout.propTypes = {
  title: PropTypes.string,
  color: PropTypes.oneOf(["primary", "success", "danger", "warning", "blue", "green", "red", "orange"]).isRequired,
  block: PropTypes.bool,
}

export default Callout
