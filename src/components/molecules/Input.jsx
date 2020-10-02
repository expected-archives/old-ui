import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Text from '~/components/atoms/Text'
import Label from '~/components/atoms/Label'

const StyledInput = styled.div((props) => css`
  margin-bottom: 24px;

  input {
    width: 100%;
    border: ${props.large ? '2px' : '1px'} solid ${
  props.hasError ? props.theme.color.red['300'] : props.theme.color.grey['200']
};
    border-radius: 4px;
    padding: ${props.large ? '14px' : '10px 12px'};
    font-size: ${props.theme.typography.text[props.large ? 'large' : 'medium'].fontSize};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${props.theme.color[props.hasError ? 'red' : 'primary']['300']};
    }

    &:disabled {
      cursor: not-allowed;
      background: ${props.theme.color.grey['200']};
      color: ${props.theme.color.grey['400']};
    }
    
    ${props.large && css`
      background: ${props.theme.color.grey['100']};
    `}
  }

  &:focus {
    outline: none;
  }
`)

export const StyledError = styled(Text)((props) => css`
  margin-top: 4px;
  color: ${props.theme.color.red['300']};
`)

function Input({
  type = 'text', input, meta, name, label, required, ...props
}) {
  const fromArrayOrCurrent = (s) => (typeof s === 'string' ? s : s?.[0])

  const error = useMemo(() => meta?.touched && (
    fromArrayOrCurrent(meta.error)
    || fromArrayOrCurrent(meta.submitError)
  ), [meta])

  return (
    <StyledInput {...props} hasError={!!error}>
      {label && (
        <Label required={required} htmlFor={name}>
          {label}
        </Label>
      )}
      <input
        type={type}
        name={name}
        required={required}
        {...props}
        {...input}
      />
      {error && (
        <StyledError as="div" size="small">
          {error}
        </StyledError>
      )}
    </StyledInput>
  )
}

Input.propTypes = {
  type: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  large: PropTypes.bool,
  value: PropTypes.any,
}

export default Input
