import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"

function getPadding(size) {
  switch (size) {
  case "small":
    return "5px 10px"
  case "medium":
    return "10px 20px"
  case "large":
    return "15px 30px"
  }
}

function getLoaderSize(size) {
  switch (size) {
  case "small":
    return "6px"
  case "medium":
    return "9px"
  case "large":
    return "12px"
  }
}

const StyledButton = styled.button(props => {
  const color = props.theme.color[props.color]

  return css`
    position: relative;
    display: block;
    border-radius: 4px;
    font-family: ${props.theme.fontFamily.default};
    font-size: ${props.theme.typography.text[props.size].fontSize};
    font-weight: ${props.theme.typography.text[props.size].fontWeight};
    cursor: pointer;
    padding: ${getPadding(props.size)};
    width: ${props.block ? "100%" : "fit-content"};
    text-decoration: none;
    border: 1px solid transparent;
    margin-bottom: 16px;
    transition: color .15s ease-in-out,
                background-color .15s ease-in-out,
                border-color .15s ease-in-out,
                box-shadow .15s ease-in-out;
    
    ${props.outline ? css`
      color: ${color["300"]};
      background: ${props.theme.color.white};
      border-color: ${color["300"]};

      :hover {
        color: ${props.theme.color.white};
        background: ${color["400"]};
        border-color: ${color["400"]};
      }
    ` : css`
      color: ${props.theme.color.white};
      background: ${color["300"]};
      border-color: ${color["300"]};

      :hover {
        background: ${color["400"]};
        border-color: ${color["400"]};
      }
    `}
    
    ${props.disabled && css`
      opacity: 0.5;
      pointer-events: none;
    `}
    
    ${props.loading && css`
      pointer-events: none;
    `}
  `
})

const StyledLoaderContainer = styled.div(props => css`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  top: -1px;
  left: -1px;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid ${props.theme.color[props.color]["400"]};
  background: ${props.outline ? props.theme.color.white : props.theme.color[props.color]["400"]};
`)

const StyledLoader = styled.div(props => css`
  text-align: center;
  
  div {
    width: ${getLoaderSize(props.size)};
    height: ${getLoaderSize(props.size)};
    background-color: ${props.outline ? props.theme.color[props.color]["400"] : props.theme.color.white};
  
    border-radius: 100%;
    display: inline-block;
    animation: bounce 1.4s infinite ease-in-out both;
  }
  
  .bounce1 {
    animation-delay: -0.32s;
  }
  
  .bounce2 {
    animation-delay: -0.16s;
  }
  
  @keyframes bounce {
    0%, 80%, 100% { 
      transform: scale(0);
    } 40% { 
      transform: scale(1.0);
    }
  }
`)

function Button({ children, ...props }) {
  return (
    <StyledButton {...props}>
      {props.loading && (
        <StyledLoaderContainer {...props} as="div">
          <StyledLoader {...props} as="div">
            <div className="bounce1"/>
            <div className="bounce2"/>
            <div className="bounce3"/>
          </StyledLoader>
        </StyledLoaderContainer>
      )}
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  as: PropTypes.oneOf(["button", "a"]).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  color: PropTypes.oneOf(["primary", "success", "danger", "warning", "blue", "green", "red", "orange"]).isRequired,
  outline: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  target: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  as: "button",
  size: "medium",
  color: "primary",
}

export default Button
