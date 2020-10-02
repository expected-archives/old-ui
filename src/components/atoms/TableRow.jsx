import styled from '@emotion/styled'
import { css } from '@emotion/core'

const TableRow = styled.div((props) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid ${props.theme.color.grey['200']};
  border-radius: 4px;
  padding: 16px 0;
  margin-bottom: 16px;

  &:hover {
    box-shadow: ${props.theme.color.grey['350']} 0 2px 14px 8px;
    border-color: ${props.theme.color.blue['300']};
  }

  &:last-child {
    margin-bottom: 0;
  }
`)

export default TableRow
