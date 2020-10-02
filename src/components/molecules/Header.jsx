import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Container from '~/components/atoms/Container'
import Heading from '~/components/atoms/Heading'
import Text from '~/components/atoms/Text'

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledHeader = styled.div((props) => css`
  display: flex;
  align-items: center;
  min-height: 52px;
  background: ${props.theme.color.grey['100']};
  border-bottom: 1px solid ${props.theme.color.grey['200']};
  padding: 24px 0;
  margin-bottom: 32px;
  
  ${props.center && css`
    ${StyledContainer} {
      display: block;
      text-align: center;
    }
  `}
`)

const StyledPreTitle = styled(Text)((props) => css`
  color: ${props.theme.color.grey['300']};
  text-transform: uppercase;
  margin-bottom: 8px;
`)

function Header({
  preTitle, title, center, children,
}) {
  return (
    <StyledHeader center={center}>
      <StyledContainer>
        <div>
          {preTitle && (
            <StyledPreTitle size="small">{preTitle}</StyledPreTitle>
          )}
          <Heading bold noMargin>{title}</Heading>
        </div>
        {children && (
          <div>
            {children}
          </div>
        )}
      </StyledContainer>
    </StyledHeader>
  )
}

Header.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
  center: PropTypes.bool,
  children: PropTypes.node,
}

export default Header
