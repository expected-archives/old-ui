import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Heading from '~/components/atoms/Heading'
import Text from '~/components/atoms/Text'

const StyledFormSection = styled.div((props) => css`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props.theme.color.grey['300']};
  margin-bottom: 2rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`)

const StyledLeftPane = styled.div`
  width: 25%;
`

const StyledRightPane = styled.div`
  margin-left: 10%;
  width: 65%;
`

const StyledHeading = styled(Heading)((props) => css`
  color: ${props.theme.color.primary['500']};
  margin-bottom: 12px;
`)

const StyledDescription = styled(Text)((props) => css`
  color: ${props.theme.color.grey['400']};
`)

function FormSection({ name, description, children }) {
  return (
    <StyledFormSection>
      <StyledLeftPane>
        <StyledHeading size="medium">
          {name}
        </StyledHeading>
        {description && (
          <StyledDescription size="medium">
            {description}
          </StyledDescription>
        )}
      </StyledLeftPane>
      <StyledRightPane>
        {children}
      </StyledRightPane>
    </StyledFormSection>
  )
}

FormSection.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

export default FormSection
