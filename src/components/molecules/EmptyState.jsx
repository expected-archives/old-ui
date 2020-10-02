import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

const StyledEmptyState = styled.div((props) => css`
  font-family: ${props.theme.fontFamily.default};
  background: ${props.theme.color.grey['100']};
  text-align: center;
  padding: 64px 0;
`)

const StyledTitle = styled.div((props) => css`
  font-size: ${props.theme.typography.heading.small.fontSize};
  line-height: ${props.theme.typography.heading.small.lineHeight};
  font-weight: ${props.theme.fontWeight.semiBold};
`)

const StyledDescription = styled.div`
  margin-top: 16px;
`

function EmptyState({ title, description }) {
  return (
    <StyledEmptyState>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledDescription>
        {description}
      </StyledDescription>
    </StyledEmptyState>
  )
}

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
}

export default EmptyState
